import React, { FC } from 'react';
import Text from 'components/atoms/Text';
import styled from 'styled-components';
import { CommonProps } from 'types/CommonProps';

type TextProps = {
  text: string;
  size: string;
  color: string;
};

export type Props = {
  texts: TextProps[];
};

const DivStyle = styled.div<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: left;
`;

const AboutBody: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { texts, width, margin } = props;

  return (
    <DivStyle width={width} margin={margin}>
      {texts.map((text) => (
        <Text
          key={text.text}
          size={text.size}
          color={text.color}
          margin="0 0 1em 0"
          text={text.text}
        />
      ))}
    </DivStyle>
  );
};

export default AboutBody;
