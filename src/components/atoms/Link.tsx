import React, { FC } from 'react';
import styled from 'styled-components';
import Size from 'const/Size';
import { CommonProps } from 'types/CommonProps';

type Props = {
  href: string;
  text: string;
};

const DivStyle = styled.div<{
  width?: string;
  margin?: string;
}>`
  display: inline-block;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const AnchorStyle = styled.a`
  font-size: ${Size.FONT.LARGE};
  color: green;
`;

const LinkIcon: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { href, text, width, margin } = props;

  return (
    <DivStyle width={width} margin={margin}>
      <AnchorStyle target="_blank" rel="noreferrer" href={href}>
        {text}
      </AnchorStyle>
    </DivStyle>
  );
};

export default LinkIcon;
