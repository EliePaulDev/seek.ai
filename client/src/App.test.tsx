import { expect, test } from 'vitest'; 
import { render, screen } from '@testing-library/react';
import App from './App';

test('Seek.ai is rendered', () => {
    render(<App />);
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
})