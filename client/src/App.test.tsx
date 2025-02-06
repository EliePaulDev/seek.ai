import { expect, test } from 'vitest'; 
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('Seek.ai is rendered', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
})