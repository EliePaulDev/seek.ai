import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Feedback from './Feedback';

test('Feedback is rendered', () => {
    render(<Feedback />);
    const feedback = screen.getByRole('button', { name: 'Feedback'});
    expect(feedback).toBeInTheDocument();
});