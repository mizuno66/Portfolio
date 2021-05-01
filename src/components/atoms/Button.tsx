import React, { FC } from 'react';
import styled from 'styled-components';
import { StyleProps } from 'types/StyleProps';

type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'>;

export type Props = ButtonProps & {
  children: React.ReactNode;
};

const ButtonStyle = styled.button<StyleProps>`
  display: inline-block;
  padding: 0.5em 1em;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
  text-decoration: none;
  background: ${(props) => props.backgroundcolor};
  border-bottom: solid 4px #627295;
  border-radius: 3px;

  &:active {
    border-bottom: none;
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
`;

const Button: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { children, ...button } = props;

  return <ButtonStyle {...button}>{children}</ButtonStyle>;
};
export default Button;
