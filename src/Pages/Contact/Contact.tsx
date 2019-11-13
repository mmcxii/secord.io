import React from 'react';
import styled from 'styled-components';

import { Card as C } from 'Elements';
import ContactLinks from './ContactLinks';

interface Props {}

const Contact: React.FC<Props> = () => (
  <section>
    <h2>Contact Me</h2>
    <Card>
      <ContactLinks />
    </Card>
  </section>
);

export default Contact;

const Card = styled(C).attrs({ as: 'section' })``;
