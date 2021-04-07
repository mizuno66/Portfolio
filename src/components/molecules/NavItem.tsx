import React, { FC } from 'react';
import styled from 'styled-components';
import { CommonProps } from 'types/CommonProps';

export type Props = {
  href: string;
  linkName: string;
  fontSize: string;
  color: string;
};

const AnchorStyle = styled.a<{
  fontsize: string;
  color: string;
}>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.color};
  text-decoration: none;
  letter-spacing: 0.05em;
`;

const ListItemStyle = styled.li<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const NavItem: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { href, linkName, fontSize, color, margin } = props;

  return (
    <ListItemStyle margin={margin}>
      <AnchorStyle href={href} fontsize={fontSize} color={color}>
        {linkName}
      </AnchorStyle>
    </ListItemStyle>
  );
};

export default NavItem;
