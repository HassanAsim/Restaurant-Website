import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  const renderHeader = () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    renderHeader();
  });

  test('renders logo image', () => {
    const logo = screen.getByAltText(/little lemon/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringMatching(/logo/i));
  });

  test('renders navigation component', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Primary navigation');
  });

  test('has correct semantic structure', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toContainElement(screen.getByRole('navigation'));
  });

  test('logo links to homepage', () => {
    const logoLink = screen.getByRole('link', { name: /little lemon/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  test('is accessible', () => {
    const header = screen.getByRole('banner');
    const nav = screen.getByRole('navigation');
    
    expect(header).toHaveAttribute('role', 'banner');
    expect(nav).toHaveAttribute('aria-label', 'Primary navigation');
  });

  test('renders mobile menu button for small screens', () => {
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});