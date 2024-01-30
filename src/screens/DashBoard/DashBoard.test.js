/* eslint-disable no-undef */
import { render, screen} from '@testing-library/react';
import { DashBoard } from './DashBoard';

describe('DashBoard', () => {
    it('renders correctly', () => {
        render(<DashBoard />);
        expect(screen.getByText('DashBoard')).toBeInTheDocument();
    });
    
});
