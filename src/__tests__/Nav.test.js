import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav Component', () => {
  const renderNav = () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    renderNav();
  });

  test('renders all navigation links', () => {
    const expectedLinks = [
      { name: /home/i, href: '/' },
      { name: /about/i, href: '/about' },
      { name: /menu/i, href: '/menu' },
      { name: /reservations/i, href: '/booking' },
      { name: /contact/i, href: '/contact' }
    ];

    expectedLinks.forEach(link => {
      const navLink = screen.getByRole('link', { name: link.name });
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute('href', link.href);
    });
  });

  test('mobile menu toggle functionality', () => {
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    const nav = screen.getByRole('navigation');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(nav).not.toHaveClass('nav-open');

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(nav).toHaveClass('nav-open');

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(nav).not.toHaveClass('nav-open');
  });

  test('navigation has correct ARIA attributes', () => {
    const nav = screen.getByRole('navigation');
    const menuList = screen.getByRole('menubar');
    const menuItems = screen.getAllByRole('menuitem');

    expect(nav).toHaveAttribute('aria-label', 'Primary navigation');
    expect(menuList).toBeInTheDocument();
    expect(menuItems.length).toBe(5);
  });

  test('menu items have correct attributes', () => {
    const menuItems = screen.getAllByRole('menuitem');
    
    menuItems.forEach(item => {
      expect(item).toHaveAttribute('role', 'menuitem');
      const link = item.querySelector('a');
      expect(link).toHaveAttribute('href');
    });
  });

  test('current page is indicated', () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink.parentElement).toHaveClass('active');
  });

  test('mobile menu button is accessible', () => {
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toHaveAttribute('aria-controls', 'primary-navigation');
    expect(menuButton).toHaveAttribute('aria-expanded');
  });
});