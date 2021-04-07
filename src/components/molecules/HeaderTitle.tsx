import React, { FC } from 'react';
import styled from 'styled-components';

export type Props = {
  mainTitle: string;
  subTitle: string;
  sizeByPx: number;
  mainColor: string;
  subColor: string;
};

const MainTitleStyle = styled.div<{
  sizebypx: number;
  color: string;
}>`
  font-family: cursive;
  font-size: ${(props) => props.sizebypx}px;
  line-height: 1.2;
  color: ${(props) => props.color};
`;

const SubTitleStyle = styled.div<{
  sizebypx: number;
  color: string;
}>`
  font-family: cursive;
  font-size: ${(props) => props.sizebypx / 2}px;
  line-height: 1;
  color: ${(props) => props.color};
`;

const HeaderTitle: FC<Props> = (props: Props) => {
  const { mainTitle, subTitle, sizeByPx, mainColor, subColor } = props;

  return (
    <div>
      <MainTitleStyle sizebypx={sizeByPx} color={mainColor}>
        {mainTitle}
      </MainTitleStyle>
      <SubTitleStyle sizebypx={sizeByPx} color={subColor}>
        {subTitle}
      </SubTitleStyle>
    </div>
  );
};

export default HeaderTitle;
