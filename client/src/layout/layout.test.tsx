import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

test('Layout is rendered', () => {
    render(<Layout><></></Layout>);
    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
});

test('Layout render its children', () => {
    render(
        <Layout>
            <div data-testid="layout-children">Layout Children</div>
        </Layout>
        )
    const layoutChildren = screen.getByTestId('layout-children');
    expect(layoutChildren).toBeInTheDocument();
    });