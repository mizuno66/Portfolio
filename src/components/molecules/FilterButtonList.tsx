import React, { FC } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Size from 'const/Size';
import Color from 'const/Color';
import { CommonProps } from 'types/CommonProps';

export type ButtonProps = {
  identifier: string;
  text: string;
};

type Props = {
  items: ButtonProps[];
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const DivStyle = styled.div<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const Navigation: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { items, onClick, width, margin } = props;

  return (
    <DivStyle width={width} margin={margin}>
      フィルター：
      {items.map((item) => (
        <Button
          identifier={item.identifier}
          text={item.text}
          onClick={onClick}
          margin="0.3em"
          size={`${Size.FONT.NORMAL}px`}
          color={Color.WHITE}
          backgroundcolor={Color.SECONDARY}
        />
      ))}
    </DivStyle>
  );
};

export default Navigation;
