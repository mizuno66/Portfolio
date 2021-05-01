import React, { FC } from 'react';
import styled from 'styled-components';
import Link, { Props as LinkProps } from 'components/atoms/Link';
import { StyleProps } from 'types/StyleProps';

export type Props = {
  items: LinkProps[];
};

const DivStyle = styled.div<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const Navigation: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { items, ...divProps } = props;

  return (
    <DivStyle {...divProps}>
      {items.map((item) => (
        <Link href={item.href} margin="0 20px 0 0">
          {item.children}
        </Link>
      ))}
    </DivStyle>
  );
};

export default Navigation;
