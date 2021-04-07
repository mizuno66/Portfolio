import React, { FC } from 'react';
import styled from 'styled-components';
import Header, { Props as HeaderProps } from 'components/organisms/Header';
import Navigation, {
  Props as NavigationProps,
} from 'components/organisms/Navigation';
import About, { Props as AboutProps } from 'components/organisms/About';
import Skill, { Props as SkillProps } from 'components/organisms/Skill';

export type Props = {
  headerProps: HeaderProps;
  navigationProps: NavigationProps;
  aboutProps: AboutProps;
  skillProps: SkillProps;
};

const DivStyle = styled.div`
  max-width: 1080px;
  margin: auto;
`;

const MainContents: FC<Props> = (props: Props) => {
  const { headerProps, navigationProps, aboutProps, skillProps } = props;

  return (
    <DivStyle>
      <Header header={headerProps.header} />
      <Navigation items={navigationProps.items} />
      <About aboutBody={aboutProps.aboutBody} linkList={aboutProps.linkList} />
      <Skill skillCards={skillProps.skillCards} />
    </DivStyle>
  );
};

export default MainContents;
