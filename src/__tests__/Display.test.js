import { render, screen } from '@testing-library/react';
import Display from '../components/Display';

describe('Display components', () => {
  test('renders zero when no props are given', () => {
    render(<Display />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('renders the value given given in prop result', () => {
    render(<Display result="-34" />);

    expect(screen.getByText('-34')).toBeInTheDocument();
  });
});
