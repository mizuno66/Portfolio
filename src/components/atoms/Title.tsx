import React, { FC } from 'react';
import styled from 'styled-components';
import { StyleProps } from 'types/StyleProps';

type TitleProps = Omit<JSX.IntrinsicElements['h1'], 'ref'>;

export type Props = TitleProps & {
  text: string;
};

const TitleStyle = styled.h1<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  line-height: 1;
  text-align: center;
  letter-spacing: 0.1em;
`;

const Title: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { text, ...titleProps } = props;

  return <TitleStyle {...titleProps}>{text}</TitleStyle>;
};

export default Title;
