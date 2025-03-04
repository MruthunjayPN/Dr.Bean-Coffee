import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SocialLink } from './types';
import { createElement } from 'react';

export const socialLinks: SocialLink[] = [
  { icon: createElement(FaTwitter, { size: 20 }), href: "https://twitter.com", label: "Twitter" },
  { icon: createElement(FaInstagram, { size: 20 }), href: "https://instagram.com", label: "Instagram" },
  { icon: createElement(FaFacebook, { size: 20 }), href: "https://facebook.com", label: "Facebook" },
  { icon: createElement(FaLinkedin, { size: 20 }), href: "https://linkedin.com", label: "LinkedIn" },
  { icon: createElement(FaGithub, { size: 20 }), href: "https://github.com", label: "GitHub" },
  { icon: createElement(MdEmail, { size: 20 }), href: "mailto:contact@example.com", label: "Email" },
]; 