import React, { FC } from 'react';
import styled from 'styled-components';
import { CommonProps } from 'types/CommonProps';

type Props = {
  identifier: string;
  backgroundcolor: string;
  color: string;
  text: string;
  size: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const ButtonStyle = styled.button<{
  backgroundcolor: string;
  color: string;
  size: string;
  margin?: string;
}>`
  display: inline-block;
  padding: 0.5em 1em;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
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

const Button: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const {
    identifier,
    backgroundcolor,
    color,
    size,
    text,
    margin,
    onClick,
  } = props;

  return (
    <ButtonStyle
      backgroundcolor={backgroundcolor}
      color={color}
      size={size}
      margin={margin}
      onClick={onClick}
      data-identifier={identifier}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
