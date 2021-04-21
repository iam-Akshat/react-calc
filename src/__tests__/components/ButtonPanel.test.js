import { render } from '@testing-library/react';
import ButtonPanel from '../../components/ButtonPanel';

describe('ButtonPanel', () => {
  test('renders all buttons', () => {
    const { container } = render(<ButtonPanel clickHandler={n => n} />);
    const component = container.querySelector('.buttons_container');
    expect(component.textContent).toBe('AC-/+%÷789X456-123+0.=');
  });
});
