import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../components/App';
import { clickCalcButtonByText, clickCalcButtonByRole } from '../../test_helpers/helpers';

describe('App', () => {
  test('starts with zero being displayed in calculator display bar', () => {
    const { container } = render(<App />);
    const resultEl = container.querySelector('.display');
    expect(resultEl.textContent).toBe('0');
  });

  test('user can type numbers by clicking corresponding buttons', () => {
    const { container } = render(<App />);
    const resultEl = container.querySelector('.display');
    const numericButtons = screen.getAllByText(/[1-9]/);
    userEvent.click(numericButtons[1]);
    expect(resultEl.textContent).toBe(numericButtons[1].textContent);
    userEvent.click(numericButtons[2]);
    expect(resultEl.textContent).toBe(`${numericButtons[1].textContent}${numericButtons[2].textContent}`);
  });

  test('clicking AC button resets result to 0', () => {
    const { container } = render(<App />);
    const resultEl = container.querySelector('.display');
    userEvent.click(screen.getByText('1'));
    clickCalcButtonByText('AC');
    expect(resultEl.textContent).toBe('0');
  });

  // clicks 1, then +, then clicks -, so calculation should be 1 - nextInput
  test('can change operation after clicking any other operation', () => {
    const { container } = render(<App />);
    const resultEl = container.querySelector('.display');
    clickCalcButtonByRole('1');
    clickCalcButtonByRole('+');
    clickCalcButtonByRole('-');
    clickCalcButtonByRole('1');
    clickCalcButtonByRole('=');

    expect(resultEl.textContent).toBe('0');
  });

  describe('when using unary operations', () => {
    test('current number being entered on the calculator is applied the operation', () => {
      const { container } = render(<App />);
      const resultEl = container.querySelector('.display');
      clickCalcButtonByRole('1');
      clickCalcButtonByRole('%');
      expect(resultEl.textContent).toBe('0.01');
    });
    test('operation is applied to a result of a previous calculation', () => {
      const { container } = render(<App />);
      const resultEl = container.querySelector('.display');
      clickCalcButtonByRole('1');
      clickCalcButtonByRole('+');
      clickCalcButtonByRole('2');
      clickCalcButtonByRole('=');
      clickCalcButtonByRole('%');
      expect(resultEl.textContent).toBe('0.03');
    });
  });
});
