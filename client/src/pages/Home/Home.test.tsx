import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from './Home';

test('Home is rendered', () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const home = screen.getByText('Seek.ai');
    expect(home).toBeInTheDocument();
});

test('Search form is rendered', () => {
     render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const searchBar = screen.getByRole('search');
    expect(searchBar).toBeInTheDocument();
});

test('Search form has a search input', () => {
     render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
});

test('Search form has a search button', () => {
     render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
});