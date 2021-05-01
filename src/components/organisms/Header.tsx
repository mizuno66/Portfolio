import React, { FC } from 'react';
import styled from 'styled-components';
import HeaderTitle, {
  Props as HeaderProps,
} from 'components/molecules/HeaderTitle';
import { StyleProps } from 'types/StyleProps';

export type Props = {
  header: HeaderProps;
};

const HeaderStyle = styled.header<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: 25vh;
  margin: ${(props) => props.margin};
  text-align: center;
`;

const Header: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { header, ...headerProps } = props;

  return (
    <HeaderStyle {...headerProps}>
      <HeaderTitle {...header} />
    </HeaderStyle>
  );
};

export default Header;
