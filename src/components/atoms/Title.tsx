import React, { FC } from 'react';
import styled from 'styled-components';
import { CommonProps } from 'types/CommonProps';

type Props = {
  text: string;
};

const TitleStyle = styled.h1<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  line-height: 1;
  text-align: center;
  letter-spacing: 0.1em;
`;

const Title: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { text, margin, width } = props;

  return (
    <TitleStyle width={width} margin={margin}>
      {text}
    </TitleStyle>
  );
};

export default Title;
