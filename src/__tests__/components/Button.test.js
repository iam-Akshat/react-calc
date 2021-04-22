import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../components/Button';

const mockHandler = jest.fn((name) => name);

describe('Button', () => {
  test('renders a button with given name as prop', () => {
    render(<Button name="test" />);

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('calls the function given as clickHandler prop on each click', () => {
    render(<Button name="test" clickHandler={mockHandler} />);
    for (let i = 0; i < 2; i += 1) {
      userEvent.click(screen.getByRole('button'));
    }

    expect(mockHandler.mock.calls.length).toBe(2);
  });
  test('calls the clickHandler with the name prop of the button', () => {
    render(<Button name="test" clickHandler={mockHandler} />);
    userEvent.click(screen.getByRole('button'));

    expect(mockHandler.mock.calls[0][0]).toBe('test');
  });
});
