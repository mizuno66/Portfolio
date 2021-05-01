import React, { FC } from 'react';
import Text, { Props as TextProps } from 'components/atoms/Text';
import styled from 'styled-components';
import { StyleProps } from 'types/StyleProps';

export type Props = {
  texts: (TextProps & { fontsize: string })[];
};

const DivStyle = styled.div<StyleProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: left;
`;

const AboutBody: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { texts, ...aboutProps } = props;

  return (
    <DivStyle {...aboutProps}>
      {texts.map((text) => (
        <Text margin="0 0 1em 0" {...text} />
      ))}
    </DivStyle>
  );
};

export default AboutBody;
