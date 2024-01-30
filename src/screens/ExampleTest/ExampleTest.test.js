/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import ExampleTest from './ExampleTest'; // Adjust the import path based on your file structure

describe('ExampleTest Component', () => {
    it('renders product titles', () => {
        render(<ExampleTest />);
        expect(screen.getByText('Produto 1')).toBeInTheDocument();
        expect(screen.getByText('Produto 2')).toBeInTheDocument();
    });

    it('renders product descriptions', () => {
        render(<ExampleTest />);
        expect(screen.getByText('Descrição breve do produto 1.')).toBeInTheDocument();
        expect(screen.getByText('Descrição breve do produto 2.')).toBeInTheDocument();
    });

    // Add more tests as needed
});
