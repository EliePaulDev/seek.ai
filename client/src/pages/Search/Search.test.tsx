import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';

test('Search is rendered', () => {
    render(<Search />);
    const search = screen.getByText(/search/i);
    expect(search).toBeInTheDocument();
})