import { expect, test, beforeAll, afterEach, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { setupServer } from 'msw/node';
import Search from './Search';
import { http, HttpResponse } from 'msw';

const server = setupServer(
    http.post('/crunchbase', () => {
        return HttpResponse.json({ message: 'Getting crunchbase data' });
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Search is rendered', () => {
    render(
        <MemoryRouter>
            <Search />
        </MemoryRouter>
    );
    const search = screen.getByText('Search');
    expect(search).toBeInTheDocument();
})