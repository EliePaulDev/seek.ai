import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar is rendered', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
});

test('Donation button is rendered', () => {
    render(<Navbar />);
    const button = screen.getByRole('button', { name: /donate/i });
    expect(button).toBeInTheDocument();
})