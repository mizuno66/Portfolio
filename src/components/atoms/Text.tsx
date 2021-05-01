import React, { FC } from 'react';
import styled from 'styled-components';
import { StyleProps } from 'types/StyleProps';

type TextProps = Omit<JSX.IntrinsicElements['p'], 'ref'>;

export type Props = TextProps & {
  text: string;
};

const TextStyle = styled.p<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  word-break: break-all;
`;

const Text: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { text, ...textProps } = props;

  return <TextStyle {...textProps}>{text}</TextStyle>;
};

export default Text;
