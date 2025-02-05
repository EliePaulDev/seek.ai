import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CompanyCard from './CompanyCard';

test('CompanyCard is rendered', () => {
    render(<CompanyCard name='Example Company' website='https://example.com' />);
    const company = screen.getByText(/example company/i);
    expect(company).toBeInTheDocument();
})