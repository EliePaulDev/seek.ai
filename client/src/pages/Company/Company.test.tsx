import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router';
import Company from './Company';

test('Company is rendered', () => {
    render(
        <MemoryRouter>
            <Company />
        </MemoryRouter>
    );
    const company = screen.getByText('Company Information');
    expect(company).toBeInTheDocument();
})