import React, { FC } from 'react';
import styled from 'styled-components';
import Button, { Props as ButtonProps } from 'components/atoms/Button';
import Size from 'const/Size';
import Color from 'const/Color';
import { StyleProps } from 'types/StyleProps';

export type Props = {
  items: ButtonProps[];
};

const DivStyle = styled.div<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const FilterButtonList: FC<Props & StyleProps> = (
  props: Props & StyleProps,
) => {
  const { items, ...divProps } = props;

  return (
    <DivStyle {...divProps}>
      フィルター：
      {items.map((item) => (
        <Button
          {...item}
          margin="0.3em"
          fontsize={`${Size.FONT.NORMAL}px`}
          color={Color.WHITE}
          backgroundcolor={Color.SECONDARY}
        >
          {item.children}
        </Button>
      ))}
    </DivStyle>
  );
};

export default FilterButtonList;
