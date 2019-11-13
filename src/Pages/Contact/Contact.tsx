import React from 'react';
import styled from 'styled-components';

import { Card as C } from 'Elements';
import SocialMedias from './SocialMedias';

interface Props {}

const Contact: React.FC<Props> = () => (
  <section>
    <h2>Contact Me</h2>
    <Card>
      <SocialMedias />
    </Card>
  </section>
);

export default Contact;

const Card = styled(C).attrs({ as: 'section' })``;
