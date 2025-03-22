import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DonateDialog from './DonateDialog';

test('DonateDialog is rendered', () => {
    render(<DonateDialog />);
    const donateDialog = screen.getByText('Donate');
    expect(donateDialog).toBeInTheDocument();
})