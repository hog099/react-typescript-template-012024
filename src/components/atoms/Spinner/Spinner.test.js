/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    it('renders correctly', () => {
        render(<Spinner />);
        const spinnerElement = screen.getByRole('status');
        expect(spinnerElement).toBeInTheDocument();
    });
});
