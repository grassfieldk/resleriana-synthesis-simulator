export type Color = {
  id: string;
  name: string;
  colorName: string;
  displayName: string;
};

export const colors: Color[] = [
  { id: 'r', name: 'red', colorName: 'gift-red', displayName: '赤' },
  { id: 'g', name: 'green', colorName: 'gift-green', displayName: '緑' },
  { id: 'b', name: 'blue', colorName: 'gift-blue', displayName: '青' },
  { id: 'y', name: 'yellow', colorName: 'gift-yellow', displayName: '黄' },
  { id: 'p', name: 'purple', colorName: 'gift-purple', displayName: '紫' }
];
