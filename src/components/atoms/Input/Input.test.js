/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { InputComponent } from './Input';

describe('InputComponent', () => {
    it('renders correctly with basic props', () => {
        render(<InputComponent name="test-input" label="Test Label" value="Test" />);
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders label when provided', () => {
        render(<InputComponent name="test-input" label="Test Label" value="" />);
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders helper text when provided', () => {
        render(<InputComponent name="test-input" helperText="Helper Text" value="" />);
        expect(screen.getByText('Helper Text')).toBeInTheDocument();
    });

    it('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        render(<InputComponent name="test-input" onChange={handleChange} value="" />);

        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });
        expect(handleChange).toHaveBeenCalledWith('New Value');
    });

    it('renders end adornment when provided', () => {
        const endAdornment = <div>Adornment</div>;
        render(<InputComponent name="test-input" endAddorment={endAdornment} value="" />);

        expect(screen.getByText('Adornment')).toBeInTheDocument();
    });
});
