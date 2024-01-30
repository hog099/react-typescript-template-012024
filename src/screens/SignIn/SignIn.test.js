/* eslint-disable no-undef */
import { render, screen} from '@testing-library/react';
import { SignIn } from './SignIn';

describe('SignIn', () => {
    it('renders correctly', () => {
        render(<SignIn />);
        expect(screen.getByText('Faça login na sua conta')).toBeInTheDocument();
    });
    
});
