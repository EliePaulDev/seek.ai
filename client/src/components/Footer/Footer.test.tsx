import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders correctly', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
});