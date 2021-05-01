import React, { FC } from 'react';
import Size from 'const/Size';
import Color from 'const/Color';
import MainContents, { Props } from 'components/templates/MainContents';

const Main: FC = () => {
  const mainContentsProps: Props = {
    headerProps: {
      header: {
        mainColor: Color.PRIMATY,
        mainTitle: 'Nakamura Kouta',
        subColor: Color.SECONDARY,
        subTitle: 'Portfolio',
        sizeByPx: Size.HEADER_TITLE,
      },
    },
    navigationProps: {
      items: [
        {
          href: '#About',
          linkName: 'About',
          fontSize: `${Size.FONT.NORMAL}px`,
          color: Color.BLACK,
        },
        {
          href: '#Skill',
          linkName: 'Skill',
          fontSize: `${Size.FONT.NORMAL}px`,
          color: Color.BLACK,
        },
      ],
    },
    aboutProps: {
      aboutBody: {
        texts: [
          {
            text: 'はじめまして、1996年生まれの中村と申します。',
            fontsize: `${Size.FONT.NORMAL}px`,
            color: Color.BLACK,
          },
          {
            text:
              '情報系の専門学校を卒業し、新卒で独立系のSierへ入社しました。客先常駐で中小規模の開発・保守を行い、.Net系を中心に経験してきました。',
            fontsize: `${Size.FONT.NORMAL}px`,
            color: Color.BLACK,
          },
          {
            text:
              'これまではレガシーな技術を使うことが多かったですが、効率的に開発ができるモダンな技術に関わっていきたいと考え、最近は独学にてTypescript/React、Python/Djangoを勉強しています。本ページはReactで作成しました。',
            fontsize: `${Size.FONT.NORMAL}px`,
            color: Color.BLACK,
          },
          {
            text:
              '保有資格は「応用情報技術者」と「Python3 エンジニア認定基礎試験」です。',
            fontsize: `${Size.FONT.NORMAL}px`,
            color: Color.BLACK,
          },
          {
            text: '（2021年4月現在）',
            fontsize: `${Size.FONT.NORMAL}px`,
            color: Color.BLACK,
          },
        ],
      },
      linkList: {
        items: [
          {
            href: 'https://github.com/mizuno66',
            children: 'Github',
          },
          {
            href: 'https://qiita.com/ZuNo',
            children: 'Qiita',
          },
        ],
      },
    },
    skillProps: {
      skillCards: [
        {
          type: 'LANG',
          skillName: 'C#',
          experience: '2年',
        },
        {
          type: 'LANG',
          skillName: 'VB',
          experience: '1年',
        },
        {
          type: 'LANG',
          skillName: 'Python',
          experience: '独学',
        },
        {
          type: 'LANG',
          skillName: 'Typescript',
          experience: '独学',
        },
        {
          type: 'FW',
          skillName: 'ASP.Net',
          experience: '1年',
        },
        {
          type: 'FW',
          skillName: '.Net Framework',
          experience: '1年',
        },
        {
          type: 'FW',
          skillName: 'Django',
          experience: '独学',
        },
        {
          type: 'FW',
          skillName: 'React',
          experience: '独学',
        },
        {
          type: 'RDB',
          skillName: 'SQLServer',
          experience: '3年',
        },
        {
          type: 'OTHER',
          skillName: 'Docker',
          experience: '独学',
        },
        {
          type: 'OTHER',
          skillName: 'CircleCi',
          experience: '独学',
        },
        {
          type: 'OTHER',
          skillName: 'TeamFoundationServer',
          experience: '3年',
        },
        {
          type: 'OTHER',
          skillName: 'Git',
          experience: '独学',
        },
      ],
    },
  };

  return (
    <MainContents
      headerProps={mainContentsProps.headerProps}
      aboutProps={mainContentsProps.aboutProps}
      navigationProps={mainContentsProps.navigationProps}
      skillProps={mainContentsProps.skillProps}
    />
  );
};

export default Main;
