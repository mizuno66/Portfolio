import React, { FC } from 'react';
import styled from 'styled-components';
import AboutBody, { Props as AboutProps } from 'components/molecules/AboutBody';
import LinkList, {
  Props as LinkListProps,
} from 'components/molecules/LinkList';
import Title from 'components/atoms/Title';
import { StyleProps } from 'types/StyleProps';

export interface Props {
  aboutBody: AboutProps;
  linkList: LinkListProps;
}

const SectionStyle = styled.section<StyleProps>`
  width: ${(props) => props.width};
  padding: 80px 0;
  margin: ${(props) => props.margin};
`;

const DivStyle = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const About: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { aboutBody, linkList, ...sectionProps } = props;

  return (
    <SectionStyle id="About" {...sectionProps}>
      <Title margin="0 0 40px 0" text="About" />
      <DivStyle>
        <AboutBody texts={aboutBody.texts} margin="20px 0" />
        <LinkList items={linkList.items} margin="20px 0" />
      </DivStyle>
    </SectionStyle>
  );
};

export default About;
