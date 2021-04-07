import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'components/atoms/Link';
import { CommonProps } from 'types/CommonProps';

type LinkIcon = {
  href: string;
  text: string;
};

export type Props = {
  items: LinkIcon[];
};

const DivStyle = styled.div<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const Navigation: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { items, width, margin } = props;

  return (
    <DivStyle width={width} margin={margin}>
      {items.map((item) => (
        <Link href={item.href} text={item.text} margin="0 20px 0 0" />
      ))}
    </DivStyle>
  );
};

export default Navigation;
