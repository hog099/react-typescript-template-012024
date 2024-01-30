/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { isValidToken } from '@/utils/jwt';
import { AuthGuardRoutes } from './AuthGuardRoutes';

// Mock the isValidToken function
jest.mock('@/utils/jwt', () => ({
    isValidToken: jest.fn(),
}));

describe('AuthGuardRoutes', () => {
    it('should return children components when a valid token is present', () => {
        localStorage.setItem('@access_token', 'validToken');
        isValidToken.mockReturnValue(true); // Mocking token validation

        // Act
        render(
            <AuthGuardRoutes>
                <div>Children Components</div>
            </AuthGuardRoutes>
        );

        // Assert
        expect(screen.getByText('Children Components')).toBeInTheDocument();
    });
});
