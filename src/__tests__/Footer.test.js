import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders contact information', () => {
    expect(screen.getByText(/123 restaurant street/i)).toBeInTheDocument();
    expect(screen.getByText(/chicago, il/i)).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/info@littlelemon.com/i)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    const socialLinks = screen.getAllByRole('link', { name: /visit our .* page/i });
    expect(socialLinks).toHaveLength(3);

    const platforms = ['facebook', 'instagram', 'twitter'];
    platforms.forEach(platform => {
      expect(
        screen.getByRole('link', { name: new RegExp(`visit our ${platform} page`, 'i') })
      ).toBeInTheDocument();
    });
  });

  test('has correct link attributes', () => {
    const socialLinks = screen.getAllByRole('link', { name: /visit our .* page/i });
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('has correct ARIA attributes', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    const contactSection = screen.getByLabelText(/contact heading/i);
    expect(contactSection).toBeInTheDocument();

    const socialList = screen.getByLabelText(/social heading/i);
    expect(socialList).toBeInTheDocument();
  });

  test('renders copyright information', () => {
    expect(screen.getByText(/© 2025 little lemon\. all rights reserved\./i)).toBeInTheDocument();
  });

  test('contact links have proper accessibility', () => {
    const phoneLink = screen.getByRole('link', { name: /call us/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+11234567890');

    const emailLink = screen.getByRole('link', { name: /email us/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:info@littlelemon.com');
  });
});