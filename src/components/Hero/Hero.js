import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello Everyone, I am Gourab Choudhuri and I am passionate about technology. 
        Trying out new technologies is my hobby. 
        The purpose of this website is to tell about myself and to show the work I have done. 
        I have spent my time while completing my degree learning new technologies.
        Every new tech aspires me to learn more and more about them. 
        </SectionText>
        <Button onClick={() => {
          window.open("https://drive.google.com/file/d/1L6mkKc5bhi73RD3XZDRbtdZbhdf8OyCb/view?usp=sharing")
          }}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;