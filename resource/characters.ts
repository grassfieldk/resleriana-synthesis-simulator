export type Character = {
  id: string;
  name: string;
  title: string;
  traits: string[];
  colorIn: string;
  colorOut: string;
};

export const characters: Character[] = [
  {
    id: 'resna_1',
    name: 'レスナ',
    title: '未来に夢を求めし者',
    traits: ['会心の出来', '雷の呪詛'],
    colorIn: 'r',
    colorOut: 'y'
  }
];
