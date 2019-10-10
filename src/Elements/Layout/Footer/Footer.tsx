import React from 'react';

import SocialMedia from './SocialMedia';

interface Props {}

const Footer: React.FC<Props> = () => (
  <footer data-testid='footer-wrapper'>
    <p data-testid='byline'>Nich Secord &copy; 2019</p>

    <SocialMedia />
  </footer>
);

export default Footer;
