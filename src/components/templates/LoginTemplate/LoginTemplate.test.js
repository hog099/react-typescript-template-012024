/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { LoginTemplate } from './LoginTemplate'; // substitua pelo caminho correto do seu arquivo

describe('LoginTemplate Render', () => {
    it('Renders LoginTemplate', () => {
        const wrapper = render(
            <LoginTemplate>
                <h1>Login Template</h1>
            </LoginTemplate>
        );
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
        const childElementInDOM = screen.getByText('Login Template');
        expect(childElementInDOM).toBeInTheDocument();
    });
});
