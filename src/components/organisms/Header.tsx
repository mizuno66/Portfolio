import React, { FC } from 'react';
import styled from 'styled-components';
import HeaderTitle, {
  Props as HeaderProps,
} from 'components/molecules/HeaderTitle';
import { CommonProps } from 'types/CommonProps';

export type Props = {
  header: HeaderProps;
};

const HeaderStyle = styled.header<{
  width?: string;
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: 25vh;
  margin: ${(props) => props.margin};
  text-align: center;
`;

const Header: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { header, margin, width } = props;

  return (
    <HeaderStyle margin={margin} width={width}>
      <HeaderTitle
        mainTitle={header.mainTitle}
        mainColor={header.mainColor}
        subTitle={header.subTitle}
        subColor={header.subColor}
        sizeByPx={header.sizeByPx}
      />
    </HeaderStyle>
  );
};

export default Header;
