import React, { FC } from 'react';
import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Size from 'const/Size';
import Color from 'const/Color';
import { CommonProps } from 'types/CommonProps';

export type Props = {
  type: 'LANG' | 'FW' | 'RDB' | 'OTHER';
  skillName: string;
  experience: string;
};

const CardStyle = styled.div<{
  margin?: string;
  width?: string;
}>`
  width: ${(props) => props.width};
  padding: 8px;
  margin: ${(props) => props.margin};
  border: 1px solid;
  border-radius: 5px;
`;

const SkillCard: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { margin, width, experience, skillName } = props;

  const experienceStr = `経験年数：${experience}`;

  return (
    <CardStyle margin={margin} width={width}>
      <Text
        text={skillName}
        margin="0 0 10px 0"
        size={`${Size.FONT.LARGE}px`}
        color={Color.BLACK}
        fontWeight="bold"
      />
      <Text
        text={experienceStr}
        margin="0 0 0 1em"
        size={`${Size.FONT.NORMAL}px`}
        color={Color.BLACK}
      />
    </CardStyle>
  );
};

export default SkillCard;
