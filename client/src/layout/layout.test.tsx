import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

test('Layout is rendered', () => {
    render(<Layout />);
    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
});