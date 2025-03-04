import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DialogFeedback from './DialogFeedback';

test('DialogFeedback is rendered', () => {
    render(<DialogFeedback />);
    const dialogFeedback = screen.getByText('Feedback');
    expect(dialogFeedback).toBeInTheDocument();
});