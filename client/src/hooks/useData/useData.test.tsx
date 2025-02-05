import { expect, test, beforeAll, afterEach, afterAll } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useData } from './useData';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const server = setupServer(
    http.get('https://www.example.com', () => {
        return HttpResponse.json({ message: 'Getting the proper data' });
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('useData should return a response object', () => {
    const { result } = renderHook(() => useData('https://www.example.com'));
    expect(result.current).toBeInstanceOf(Object);
});

test('useData should return an object with data, loading, and error properties', () => {
    const { result } = renderHook(() => useData('https://www.example.com'));
    expect(result.current).toHaveProperty('data');
    expect(result.current).toHaveProperty('loading');
    expect(result.current).toHaveProperty('error');
});

test('useData should load on initial render', () => {
    const { result } = renderHook(() => useData('https://www.example.com'));
    expect(result.current.loading).toBe(true);
});



test('useData should initialize error as null', () => {
    const { result } = renderHook(() => useData('https://www.example.com'));
    expect(result.current.error).toBeNull();
});

test('useData should set loading to false after fetching data', async () => {
    const { result } = renderHook(() => useData('https://www.example.com'));
    await waitFor(() => expect(result.current.loading).toBe(false));
});

test('useData should set data after fetching data', async () => {
    const { result } = renderHook(() => useData('https://www.example.com'));
    await waitFor(() => expect(result.current.data).toEqual({ message: 'Getting the proper data' }));
});

test('useData will use options object to fetch data', async () => {
    server.use(
        http.post('https://www.example.com', () => {
            return HttpResponse.json({ message: 'Getting the proper data' });
        })
    )
    const { result } = renderHook(() => useData('https://www.example.com', { method: 'POST' }));
    await waitFor(() => expect(result.current.data).toEqual({ message: 'Getting the proper data' }));
});

test('useData should set error if fetch fails', async () => {
    server.use(
        http.get('https://www.example.com', () => {
            return HttpResponse.json({ error: 'Failed to fetch data'}, {status: 500 });
        })
    );

    const { result } = renderHook(() => useData('https://www.example.com'));
    await waitFor(() => expect(result.current.error).toEqual({ error: 'Failed to fetch data'}));
});

