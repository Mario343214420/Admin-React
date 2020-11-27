import { render, screen } from '@testing-library/react';
import Computer from './Computer';
// import Mobile from './Mobile';

test('renders learn react link', () => {
  render(<Computer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
