import React, { FC, useState } from 'react';
import styled from 'styled-components';
import SkillCard, {
  Props as SkillCardProps,
} from 'components/molecules/SkillCard';
import Title from 'components/atoms/Title';
import FilterButtonList, {
  ButtonProps,
} from 'components/molecules/FilterButtonList';
import { CommonProps } from 'types/CommonProps';
import { useMediaQueryContext } from 'components/provider/MediaQueryProvider';

export type Props = {
  skillCards: SkillCardProps[];
};

const SectionStyle = styled.section<{
  width?: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  padding: 80px 0;
  margin: ${(props) => props.margin};
`;

const InnerStyle = styled.div`
  padding: 0 40px;
  margin: 0 auto;
`;

const ListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid;
`;

const Skill: FC<Props & CommonProps> = (props: Props & CommonProps) => {
  const { skillCards, width, margin } = props;
  const [procSkillCards, setProcSkillCards] = useState(skillCards);
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  const buttons: ButtonProps[] = [
    {
      identifier: 'All',
      text: '全て',
    },
    {
      identifier: 'LANG',
      text: '言語',
    },
    {
      identifier: 'FW',
      text: 'フレームワーク',
    },
    {
      identifier: 'RDB',
      text: 'データベース',
    },
    {
      identifier: 'Other',
      text: 'その他',
    },
  ];
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    switch (e.currentTarget.dataset.identifier) {
      case 'LANG':
        setProcSkillCards(
          skillCards.filter((skillCard) => skillCard.type === 'LANG'),
        );
        break;
      case 'FW':
        setProcSkillCards(
          skillCards.filter((skillCard) => skillCard.type === 'FW'),
        );
        break;
      case 'RDB':
        setProcSkillCards(
          skillCards.filter((skillCard) => skillCard.type === 'RDB'),
        );
        break;
      case 'Other':
        setProcSkillCards(
          skillCards.filter((skillCard) => skillCard.type === 'OTHER'),
        );
        break;
      default:
        setProcSkillCards(skillCards);
        break;
    }
  };

  return (
    <SectionStyle id="Skill" width={width} margin={margin}>
      <InnerStyle>
        <Title margin="0 0 40px 0" text="Skill" />
        <FilterButtonList items={buttons} onClick={onClick} />
        <ListStyle>
          {isMobileSite &&
            procSkillCards.map((skillCard) => (
              <SkillCard
                key={skillCard.skillName}
                type={skillCard.type}
                skillName={skillCard.skillName}
                experience={skillCard.experience}
                width="80%"
                margin="10px"
              />
            ))}
          {isTabletSite &&
            procSkillCards.map((skillCard) => (
              <SkillCard
                key={skillCard.skillName}
                type={skillCard.type}
                skillName={skillCard.skillName}
                experience={skillCard.experience}
                width="40%"
                margin="10px"
              />
            ))}
          {isPcSite &&
            procSkillCards.map((skillCard) => (
              <SkillCard
                key={skillCard.skillName}
                type={skillCard.type}
                skillName={skillCard.skillName}
                experience={skillCard.experience}
                width="28%"
                margin="10px"
              />
            ))}
        </ListStyle>
      </InnerStyle>
    </SectionStyle>
  );
};

export default Skill;
