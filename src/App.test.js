import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders footer with copyright text', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const footerText = screen.getByText(
      /© 2022 Task Manager. All Rights Reserved/i,
    );
    expect(footerText).toBeInTheDocument();
  });
});
