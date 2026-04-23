import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders valentine question', () => {
  render(<App />);
  expect(screen.getByText(/will you be my valentine/i)).toBeInTheDocument();
});

test('shows happy message when Yes is clicked', async () => {
  render(<App />);
  await userEvent.click(screen.getByRole('button', { name: /yes/i }));
  expect(screen.getByText(/yay! you made my day/i)).toBeInTheDocument();
});

test('shows sad message when No is clicked', async () => {
  render(<App />);
  await userEvent.click(screen.getByRole('button', { name: /no/i }));
  expect(screen.getByText(/that's okay/i)).toBeInTheDocument();
});
