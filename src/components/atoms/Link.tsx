import React, { FC } from 'react';
import styled from 'styled-components';
import Size from 'const/Size';
import { StyleProps } from 'types/StyleProps';

type AnchorProps = Omit<JSX.IntrinsicElements['a'], 'ref'>;

export type Props = AnchorProps & {
  href: string;
  children: React.ReactNode;
};

const DivStyle = styled.div<StyleProps>`
  display: inline-block;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const AnchorStyle = styled.a`
  font-size: ${Size.FONT.LARGE};
  color: green;
`;

const LinkIcon: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { href, children, width, margin } = props;

  return (
    <DivStyle width={width} margin={margin}>
      <AnchorStyle target="_blank" rel="noreferrer" href={href}>
        {children}
      </AnchorStyle>
    </DivStyle>
  );
};

export default LinkIcon;
