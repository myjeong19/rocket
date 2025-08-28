export interface SajuItem {
  title: string;
  subTitle?: string;
  description?: string;
}

export interface SajuRowData {
  categoryTitle: string;
  categoryDescription: string;
  si: SajuItem | SajuItem[];
  il: SajuItem | SajuItem[];
  wol: SajuItem | SajuItem[];
  nyeon: SajuItem | SajuItem[];
}

export const sajuData: SajuRowData[] = [
  {
    categoryTitle: '십성',
    categoryDescription: '십성',
    si: {
      title: '상관',
      description: '상관',
    },
    il: {
      title: '비견',
      description: '비견',
    },
    wol: {
      title: '상관',
      description: '상관',
    },
    nyeon: {
      title: '상관',
      description: '상관',
    },
  },
  {
    categoryTitle: '천간',
    categoryDescription: '천간',
    si: {
      title: '임',
      subTitle: '임',
      description: '임',
    },
    il: {
      title: '정',
      subTitle: '정',
      description: '정',
    },
    wol: {
      title: '계',
      subTitle: '계',
      description: '계',
    },
    nyeon: {
      title: '계',
      subTitle: '계',
      description: '계',
    },
  },
  {
    categoryTitle: '지지',
    categoryDescription: '지지',
    si: {
      title: '인',
      subTitle: '인',
      description: '인',
    },
    il: {
      title: '사',
      subTitle: '사',
      description: '사',
    },
    wol: {
      title: '해',
      subTitle: '해',
      description: '해',
    },
    nyeon: {
      title: '유',
      description: '유',
      subTitle: '유',
    },
  },
  {
    categoryTitle: '십성',
    categoryDescription: '십성',
    si: {
      title: '비견',
      description: '비견',
    },
    il: {
      title: '편재',
      description: '편재',
    },
    wol: {
      title: '정인',
      description: '정인',
    },
    nyeon: {
      title: '비견',
      description: '비견',
    },
  },
  {
    categoryTitle: '십이운성',
    categoryDescription: '십이운성',
    si: {
      title: '사',
      description: '사',
    },
    il: {
      title: '제왕',
      description: '제왕',
    },
    wol: {
      title: '태',
      description: '태',
    },
    nyeon: {
      title: '장생',
      description: '장생',
    },
  },
  {
    categoryTitle: '십이신살',
    categoryDescription: '십이신살',
    si: {
      title: '겁살',
      description: '겁살',
    },
    il: {
      title: '지살',
      description: '지살',
    },
    wol: {
      title: '효마살',
      description: '효마살',
    },
    nyeon: {
      title: '장성살',
      description: '장성살',
    },
  },
  {
    categoryTitle: '귀인',
    categoryDescription: '귀인',
    si: {
      title: '없음',
    },
    il: {
      title: '없음',
    },
    wol: {
      title: '천을귀인',
      description: '천을귀인',
    },
    nyeon: [
      {
        title: '천을귀인',
        description: '천을귀인',
      },
      {
        title: '천을귀인',
        description: '천을귀인',
      },
      {
        title: '천을귀인',
        description: '천을귀인',
      },
    ],
  },
];
