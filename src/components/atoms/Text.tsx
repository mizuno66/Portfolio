import React, { FC } from 'react';
import styled from 'styled-components';
import { CommonProps } from 'types/CommonProps';

type Props = {
  size: string;
  color: string;
  text: string;
  fontWeight?: string;
};

const TextStyle = styled.p<{
  margin?: string;
  width?: string;
  size: string;
  color: string;
  fontweight?: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  word-break: break-all;
`;

const Text: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { size, color, text, fontWeight, margin, width } = props;

  return (
    <TextStyle
      size={size}
      color={color}
      fontweight={fontWeight}
      margin={margin}
      width={width}
    >
      {text}
    </TextStyle>
  );
};

Text.defaultProps = {
  fontWeight: 'normal',
};

export default Text;
