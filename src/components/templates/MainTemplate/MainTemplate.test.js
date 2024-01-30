/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MainTemplate } from './MainTemplate'; // substitua pelo caminho correto do seu arquivo

describe('MainTemplate Render', () => {
    it('Renders MainTemplate', () => {
        const wrapper = render(
            <MainTemplate>
                <h1>Main Template</h1>
            </MainTemplate>
        );
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
        const childElementInDOM = screen.getByText('Main Template');
        expect(childElementInDOM).toBeInTheDocument();
    });
});
