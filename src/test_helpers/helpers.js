import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const clickCalcButtonByText = buttonName => {
  userEvent.click(screen.getByText(buttonName));
};

const clickCalcButtonByRole = buttonName => {
  userEvent.click(screen.getByRole('button', { name: buttonName }));
};
export { clickCalcButtonByText, clickCalcButtonByRole };
