import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import SkillCard, {
  Props as SkillCardProps,
} from 'components/molecules/SkillCard';
import Title from 'components/atoms/Title';
import FilterButtonList, {
  Props as ButtonProps,
} from 'components/molecules/FilterButtonList';
import { StyleProps } from 'types/StyleProps';
import { useMediaQueryContext } from 'components/provider/MediaQueryProvider';

export type Props = {
  skillCards: SkillCardProps[];
};

const SectionStyle = styled.section<StyleProps>`
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

const Skill: FC<Props & StyleProps> = (props: Props & StyleProps) => {
  const { skillCards, width, margin } = props;
  const [procSkillCards, setProcSkillCards] = useState(skillCards);
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  const buttons: ButtonProps = {
    items: [
      {
        children: '全て',
        onClick: useCallback(() => setProcSkillCards(skillCards), [skillCards]),
      },
      {
        children: '言語',
        onClick: useCallback(
          () =>
            setProcSkillCards(
              skillCards.filter((skillCard) => skillCard.type === 'LANG'),
            ),
          [skillCards],
        ),
      },
      {
        children: 'フレームワーク',
        onClick: useCallback(
          () =>
            setProcSkillCards(
              skillCards.filter((skillCard) => skillCard.type === 'FW'),
            ),
          [skillCards],
        ),
      },
      {
        children: 'データベース',
        onClick: useCallback(
          () =>
            setProcSkillCards(
              skillCards.filter((skillCard) => skillCard.type === 'RDB'),
            ),
          [skillCards],
        ),
      },
      {
        children: 'その他',
        onClick: useCallback(
          () =>
            setProcSkillCards(
              skillCards.filter((skillCard) => skillCard.type === 'OTHER'),
            ),
          [skillCards],
        ),
      },
    ],
  };

  return (
    <SectionStyle id="Skill" width={width} margin={margin}>
      <InnerStyle>
        <Title margin="0 0 40px 0" text="Skill" />
        <FilterButtonList items={buttons.items} />
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
