import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home is rendered', () => {
    render(<Home />);
    const home = screen.getByText('Seek.ai');
    expect(home).toBeInTheDocument();
});

test('Search form is rendered', () => {
    render(<Home />);
    const searchBar = screen.getByRole('search');
    expect(searchBar).toBeInTheDocument();
});

test('Search form has a search input', () => {
    render(<Home />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
});

test('Search form has a search button', () => {
    render(<Home />);
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
});