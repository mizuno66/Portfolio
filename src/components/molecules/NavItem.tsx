import React, { FC } from 'react';
import styled from 'styled-components';
import { StyleProps } from 'types/StyleProps';

export type Props = {
  href: string;
  linkName: string;
  fontSize: string;
  color: string;
};

const AnchorStyle = styled.a<StyleProps>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.color};
  text-decoration: none;
  letter-spacing: 0.05em;
`;

const ListItemStyle = styled.li<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const NavItem: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { linkName, margin, ...AnchorProps } = props;

  return (
    <ListItemStyle margin={margin}>
      <AnchorStyle {...AnchorProps}>{linkName}</AnchorStyle>
    </ListItemStyle>
  );
};

export default NavItem;
