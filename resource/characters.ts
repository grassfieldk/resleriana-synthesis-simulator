export type Character = {
  id: string;
  rarity: number;
  order: number;
  name: string;
  title: string;
  traits: string[];
  colorIn: string;
  colorOut: string;
};

export const characters: Character[] = [
  { id: '1', rarity: 3, order: 1, name: 'レスナ', title: 'Innocent Dreamer', traits: ['会心の出来', '雷の呪詛', '斬耐性上昇'], colorIn: 'g', colorOut: 'p' },
  { id: '2', rarity: 3, order: 2, name: 'ライザ', title: 'One Summer Story', traits: ['魔防の祝福', '風の祝福', '火ダメージ上昇'], colorIn: 'g', colorOut: 'r' },
  { id: '3', rarity: 3, order: 0, name: 'フィリス', title: 'Crystal Master', traits: ['魔力の呪詛', '突の祝福', '火耐性上昇'], colorIn: 'y', colorOut: 'r' },
  { id: '4', rarity: 3, order: 0, name: 'オスカー', title: '植物は親友', traits: ['守護の祝福', '氷の祝福', '物理耐性上昇【D】'], colorIn: 'b', colorOut: 'g' },
  { id: '5', rarity: 3, order: 0, name: 'コルネリア', title: 'ノーミルクノーライフ', traits: ['剛力の呪詛', '破壊力上昇', 'スキル威力上昇'], colorIn: 'g', colorOut: 'b' },
  { id: '6', rarity: 3, order: 0, name: 'ロジー', title: '黄昏の錬金剣', traits: ['会心の出来', '物防の祝福', '斬ダメージ上昇'], colorIn: 'y', colorOut: 'b' },
  { id: '7', rarity: 3, order: 0, name: 'キースグリフ', title: '知識の探求者', traits: ['会心の出来', '魔力の呪詛', '風耐性上昇'], colorIn: 'b', colorOut: 'g' },
  { id: '8', rarity: 3, order: 0, name: 'オディーリア', title: '古の機械人形', traits: ['魔力の祝福', '剛力の呪詛', '魔法ダメージ上昇'], colorIn: 'p', colorOut: 'r' },
  { id: '9', rarity: 3, order: 0, name: 'アーシャ', title: 'MARIA of Dusk', traits: ['大きな回復量', '会心の出来', '回復量上昇'], colorIn: 'y', colorOut: 'p' },
  { id: '10', rarity: 3, order: 0, name: 'イクセル', title: '戦う料理人', traits: ['魔防の祝福', '氷の呪詛', '突耐性上昇'], colorIn: 'y', colorOut: 'p' },
  { id: '11', rarity: 3, order: 0, name: 'ロロナ', title: '五ツ星パイマスター', traits: ['魔力の呪詛', '追い打ち強化', '氷ダメージ上昇'], colorIn: 'r', colorOut: 'g' },
  { id: '12', rarity: 3, order: 0, name: 'ロゼ', title: '光の剣', traits: ['剛力の呪詛', '魔防の祝福', '物理ブレイクダメージ上昇'], colorIn: 'r', colorOut: 'y' },
  { id: '13', rarity: 3, order: 0, name: 'ユーディー', title: 'Hero of Tempest', traits: ['全体回復ボーナス', '風の呪詛', '魔法耐性上昇'], colorIn: 'b', colorOut: 'p' },
  { id: '14', rarity: 3, order: 0, name: 'ミュー', title: '南国の冒険者', traits: ['会心の出来', '氷の祝福', '突ダメージ上昇'], colorIn: 'r', colorOut: 'y' },
  { id: '15', rarity: 3, order: 0, name: 'マリー', title: 'Lovely Bomber', traits: ['魔力の祝福', '剛力の呪詛', 'ブレイクダメージ上昇'], colorIn: 'p', colorOut: 'g' },
  { id: '16', rarity: 3, order: 0, name: 'ソフィー', title: '百科繚乱フロネシス', traits: ['魔力の呪詛', '魔力の祝福', '物理耐性上昇【D】'], colorIn: 'y', colorOut: 'p' },
  { id: '17', rarity: 3, order: 0, name: 'プラフタ', title: 'ミステリアスドール', traits: ['打の呪詛', '打の盾', '打ダメージ上昇'], colorIn: 'b', colorOut: 'y' },
  { id: '18', rarity: 3, order: 0, name: 'ヴァレリア', title: '過去に夢を求めし者', traits: ['剛力の祝福', '火の呪詛', '与ダメージ上昇'], colorIn: 'b', colorOut: 'g' },
  { id: '19', rarity: 3, order: 0, name: 'ヴァレリア', title: 'Secret Amnesia', traits: ['斬の祝福', '斬の呪詛', '斬ダメージ上昇'], colorIn: 'p', colorOut: 'r' },
  { id: '20', rarity: 3, order: 0, name: 'クラウディア', title: 'One Summer Molody', traits: ['氷の呪詛', '氷の盾', '氷ダメージ上昇'], colorIn: 'g', colorOut: 'b' },
  { id: '21', rarity: 3, order: 0, name: 'エリー', title: 'チーズケーキの申し子', traits: ['打の祝福', '全体回復ボーナス', '回復量上昇'], colorIn: 'b', colorOut: 'y' },
  { id: '22', rarity: 3, order: 0, name: 'リリー', title: 'Birth of The Legend', traits: ['風の祝福', '追い打ち強化', '風ダメージ上昇'], colorIn: 'r', colorOut: 'b' },
  { id: '23', rarity: 3, order: 0, name: 'メルル', title: 'パワフルプリンセス', traits: ['突の祝福', '風の盾', '魔法ダメージ上昇'], colorIn: 'g', colorOut: 'r' },
  { id: '24', rarity: 3, order: 0, name: 'プラフタ', title: '魅惑のヴァンパイア', traits: ['斬の祝福', '単体回復ボーナス', '物理ダメージ上昇'], colorIn: 'g', colorOut: 'y' },
  { id: '25', rarity: 2, order: 0, name: 'レスナ', title: '未来に夢を求めし者', traits: ['魔力の祝福', '単体回復ボーナス', '魔法ダメージ上昇'], colorIn: 'y', colorOut: 'g' },
  { id: '26', rarity: 2, order: 0, name: 'レント', title: '剛腕戦士', traits: ['打の盾', '雷の祝福', '物理耐性上昇'], colorIn: 'g', colorOut: 'p' },
  { id: '27', rarity: 2, order: 0, name: 'モニカ', title: 'モニカオンステージ', traits: ['突の祝福', '物防の祝福', '魔法耐性上昇【D】'], colorIn: 'r', colorOut: 'b' },
  { id: '28', rarity: 2, order: 0, name: 'シャリステラ', title: '族長の娘', traits: ['守護の祝福', '魔力の呪詛', '魔法ブレイクダメージ上昇'], colorIn: 'n', colorOut: 'y' },
  { id: '29', rarity: 2, order: 0, name: 'エスカ', title: 'エンドレスタルト', traits: ['斬の盾', '打の祝福', '打耐性上昇'], colorIn: 'p', colorOut: 'b' },
  { id: '30', rarity: 2, order: 0, name: 'メルル', title: 'Damsel in Distress', traits: ['氷の呪詛', '守護の祝福', '単体攻撃威力上昇'], colorIn: 'g', colorOut: 'r' },
  { id: '31', rarity: 2, order: 0, name: 'トトリ', title: '強き母に憧れる少女', traits: ['大きな回復量', '魔防の祝福', '回復量上昇'], colorIn: 'p', colorOut: 'g' },
  { id: '32', rarity: 2, order: 0, name: 'エスティ', title: '頼れる受付嬢', traits: ['斬の呪詛', '火の盾', '物理耐性上昇'], colorIn: 'r', colorOut: 'y' },
  { id: '33', rarity: 2, order: 0, name: 'ヴェイン', title: '願いを叶える力', traits: ['雷の祝福', '雷の盾', '氷耐性上昇'], colorIn: 'p', colorOut: 'b' },
  { id: '34', rarity: 2, order: 0, name: 'ヴィオラート', title: 'カロッテ・キャロット', traits: ['雷の祝福', '火の呪詛', '雷ダメージ上昇'], colorIn: 'b', colorOut: 'g' },
  { id: '35', rarity: 2, order: 0, name: 'ルーウェン', title: '熱血の冒険者', traits: ['斬の祝福', '突の呪詛', 'スキル威力上昇'], colorIn: 'y', colorOut: 'r' },
  { id: '36', rarity: 1, order: 0, name: 'タオ', title: '学者のタマゴ', traits: ['打の祝福', '全体回復ボーナス', '物理ダメージ上昇'], colorIn: 'y', colorOut: 'b' },
  { id: '37', rarity: 1, order: 0, name: 'テス', title: '兎耳トラブルメーカー', traits: ['突の盾', '大きな回復量', '単体回復量上昇'], colorIn: 'r', colorOut: 'y' },
  { id: '38', rarity: 1, order: 0, name: 'マリオン', title: '開発班の班長', traits: ['物防の祝福', '火の祝福', '雷耐性上昇'], colorIn: 'p', colorOut: 'r' },
  { id: '39', rarity: 1, order: 0, name: 'リンカ', title: '班長補佐', traits: ['火の祝福', '物防の祝福', '魔法耐性上昇'], colorIn: 'g', colorOut: 'y' },
  { id: '40', rarity: 1, order: 0, name: 'クーデリア', title: '貴族令嬢', traits: ['打の呪詛', '氷の盾', '与ダメージ上昇'], colorIn: 'p', colorOut: 'r' },
];
