import React from 'react';
import styled from 'styled-components';

import { spacing } from 'Utilities';
import { Card as C } from 'Elements';
import ContactLinks from './ContactLinks';

interface Props {}

const Contact: React.FC<Props> = () => (
  <section>
    <h2>Contact Me</h2>
    <Card>
      <Desc>Please contact me using any the links below, I'd love to work with you on your next project!</Desc>
      <ContactLinks />
    </Card>
  </section>
);

export default Contact;

const Card = styled(C).attrs({ as: 'section' })``;

const Desc = styled.p`
  margin-bottom: ${spacing.sm};
`;
