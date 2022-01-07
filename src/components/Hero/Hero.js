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
        The purpose of this website is to tell about myself and to show the work I have done. I have spend my time while completing my 
        degree in learning new technologies. Every new tech aspires me to learn more and mpre about them. 
        </SectionText>
        <Button onClick={() => {window.open("https://drive.google.com/file/d/1AgSB6vovnKW0VKYG92Q4SBJdAWS_EGhB/view?usp=sharing")}}>Resume</Button>
        {/* Here I will put my resume link which will be uploaded to drive */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;