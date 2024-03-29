import React, { FC } from 'react';
import styled from 'styled-components';
import NavItem, { Props as NavItemProps } from 'components/molecules/NavItem';
import Size from 'const/Size';
import Color from 'const/Color';
import { StyleProps } from 'types/StyleProps';

export type Props = {
  items: NavItemProps[];
};

const NavStyle = styled.nav<StyleProps>`
  position: sticky;
  top: 0;
  z-index: 1;
  width: ${(props) => props.width};
  padding: 10px 30px;
  margin: ${(props) => props.margin};
  background-color: ${Color.WHITE};
`;

const UlStyle = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

const Navigation: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { items, ...navProps } = props;

  return (
    <NavStyle {...navProps}>
      <UlStyle>
        {items.map((item) => (
          <NavItem
            href={item.href}
            linkName={item.linkName}
            fontSize={`${Size.FONT.LARGE}px`}
            width="8em"
            color={Color.BLACK}
            margin="0 20px"
            key={item.linkName}
          />
        ))}
      </UlStyle>
    </NavStyle>
  );
};

export default Navigation;
