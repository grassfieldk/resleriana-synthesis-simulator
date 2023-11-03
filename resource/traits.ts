import { Trait } from '@/types/Trait';

export const traits: Trait[] = [
  { name: '剛力の祝福', effect: '物理攻撃のダメージ3～30%アップ' },
  { name: '斬の祝福', effect: '斬属性のダメージ5～45%アップ' },
  { name: '打の祝福', effect: '打属性のダメージ5～45%アップ' },
  { name: '突の祝福', effect: '突属性のダメージ5～45%アップ' },
  { name: '魔力の祝福', effect: '魔法攻撃のダメージ3～30%アップ' },
  { name: '火の祝福', effect: '火属性のダメージ5～45%アップ' },
  { name: '氷の祝福', effect: '氷属性のダメージ5～45%アップ' },
  { name: '風の祝福', effect: '風属性のダメージ5～45%アップ' },
  { name: '雷の祝福', effect: '雷属性のダメージ5～45%アップ' },
  { name: 'ぷに特攻', effect: 'ぷに種族に与えるダメージ6～60%アップ' },
  { name: '精霊特攻', effect: '精霊種族に与えるダメージ6～60%アップ' },
  { name: '獣特攻', effect: '獣種族に与えるダメージ6～60%アップ' },
  { name: '鳥特攻', effect: '鳥種族に与えるダメージ6～60%アップ' },
  { name: '水棲特攻', effect: '水棲種族に与えるダメージ6～60%アップ' },
  { name: '使い切り攻撃強化', effect: '使用回数が1回の時、ダメージ5～45%アップ' },
  { name: '追い打ち強化', effect: 'ブレイク中の敵へのダメージ6～54%アップ' },
  { name: '破壊力上昇', effect: '戦闘アイテムが与えるダメージ6～54%アップ' },
  { name: '与ダメージ上昇', effect: 'スキルダメージ2～15%アップ' },
  { name: 'スキル威力上昇', effect: 'スキル威力3～25%アップ' },
  { name: '斬ダメージ上昇', effect: '斬属性のスキルダメージ3～25%アップ' },
  { name: '打ダメージ上昇', effect: '打属性のスキルダメージ3～25%アップ' },
  { name: '突ダメージ上昇', effect: '突属性のスキルダメージ3～25%アップ' },
  { name: '火ダメージ上昇', effect: '火属性のスキルダメージ3～25%アップ' },
  { name: '氷ダメージ上昇', effect: '氷属性のスキルダメージ3～25%アップ' },
  { name: '風ダメージ上昇', effect: '風属性のスキルダメージ3～25%アップ' },
  { name: '雷ダメージ上昇', effect: '雷属性のスキルダメージ3～25%アップ' },
  { name: '物理ダメージ上昇', effect: '物理攻撃のスキルダメージ2～20%アップ' },
  { name: '魔法ダメージ上昇', effect: '魔法攻撃のスキルダメージ2～20%アップ' },
  { name: 'ブレイク中ダメージ上昇', effect: 'ブレイク中の敵へのダメージ3～30%アップ' },
  { name: 'ブレイクダメージ上昇', effect: 'ブレイクダメージ2～15%アップ' },
  { name: '物理ブレイクダメージ上昇', effect: '物理攻撃のブレイクダメージ2～20%アップ' },
  { name: '魔法ブレイクダメージ上昇', effect: '魔法攻撃のブレイクダメージ2～20%アップ' },
  { name: 'ブレイクダメージ上昇【背水】', effect: 'HPが50%以下の時、ブレイクダメージ2～20%アップ' },
  { name: 'ブレイクダメージ上昇【渾身】', effect: 'HP満タン時、ブレイクダメージ2～20%アップ' },
  { name: '単体攻撃威力上昇', effect: '単体攻撃のスキル威力3～25%アップ' },
  { name: '全体攻撃威力上昇', effect: '全体攻撃のスキル威力3～25%アップ' },
  { name: '魔法ダメージ上昇【渾身】', effect: 'HP満タン時、魔法攻撃のダメージ3～30%アップ' },
  { name: '魔法ダメージ上昇【背水】', effect: 'HPが50%以下の時、魔法攻撃のダメージ4～35%アップ' },
  { name: '物理ダメージ上昇【渾身】', effect: 'HP満タン時、物理攻撃のダメージ4～30%アップ' },
  { name: '物理ダメージ上昇【背水】', effect: 'HPが50%以下の時、物理攻撃のダメージ4～35%アップ' },
  { name: 'ぷにダメージ上昇', effect: 'ぷに種族に与えるダメージ4～35%アップ' },
  { name: '獣ダメージ上昇', effect: '獣種族に与えるダメージ4～35%アップ' },
  { name: '精霊ダメージ上昇', effect: '精霊種族に与えるダメージ4～35%アップ' },
  { name: '鳥ダメージ上昇', effect: '鳥種族に与えるダメージ4～35%アップ' },
  { name: '水棲ダメージ上昇', effect: '水棲種族に与えるダメージ4～35%アップ' },
  { name: '守護の祝福', effect: '「物防1～5%アップ」を1回攻撃されるまで付与「魔防1～5%アップ」を1回攻撃されるまで付与' },
  { name: '魔防の祝福', effect: '「魔防1～8%アップ」を1回攻撃されるまで付与' },
  { name: '物防の祝福', effect: '「物防1～8%アップ」を1回攻撃されるまで付与' },
  { name: '斬の盾', effect: '対象に「斬属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '打の盾', effect: '対象に「打属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '突の盾', effect: '対象に「突属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '火の盾', effect: '対象に「火属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '氷の盾', effect: '対象に「氷属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '風の盾', effect: '対象に「風属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '雷の盾', effect: '対象に「雷属性耐性1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: 'ぷに特防', effect: '対象に「ぷに種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与' },
  { name: '精霊特防', effect: '対象に「精霊種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与' },
  { name: '獣特防', effect: '対象に「獣種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与' },
  { name: '鳥特防', effect: '対象に「鳥種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与' },
  { name: '水棲特防', effect: '対象に「水棲種族から受けるダメージ1～8%ダウン」を1回攻撃を受けるまで付与' },
  { name: '会心の出来', effect: '「クリティカル確率1～8%アップ」を1回行動終了するまで付与' },
  { name: '斬耐性上昇', effect: '斬属性耐性1～10%アップ' },
  { name: '打耐性上昇', effect: '打属性耐性1～10%アップ' },
  { name: '突耐性上昇', effect: '突属性耐性1～10%アップ' },
  { name: '火耐性上昇', effect: '火属性耐性1～10%アップ' },
  { name: '氷耐性上昇', effect: '氷属性耐性1～10%アップ' },
  { name: '風耐性上昇', effect: '風属性耐性1～10%アップ' },
  { name: '雷耐性上昇', effect: '雷属性耐性1～10%アップ' },
  { name: '物理耐性上昇', effect: '物理攻撃から受けるダメージ1～5%ダウン' },
  { name: '魔法耐性上昇', effect: '魔法攻撃から受けるダメージ1～5%ダウン' },
  { name: '全耐性上昇【背水】', effect: 'HPが50%以下の時、受けるダメージ1～10%ダウン' },
  { name: '魔法耐性上昇【渾身】', effect: 'HP満タン時、受ける魔法攻撃のダメージ2～15%ダウン' },
  { name: '魔法耐性上昇【D】', effect: 'ディフェンダーへの魔法攻撃のダメージ1～5%ダウン' },
  { name: '物理耐性上昇【渾身】', effect: 'HP満タン時、受ける物理攻撃のダメージ2～15%ダウン' },
  { name: '物理耐性上昇【D】', effect: 'ディフェンダーへの物理攻撃のダメージ1～5%ダウン' },
  { name: '全体攻撃耐性上昇', effect: '全体攻撃から受けるダメージ3～25%ダウン' },
  { name: '物理/魔法耐性アップ強化【D】', effect: '対象がディフェンダーへ与える「物理被ダメージダウン」と「魔法被ダメージダウン」の効果量5～50%アップ' },
  { name: 'ダメージバフ強化【A】', effect: 'アタッカーへ与えるダメージ強化の効果量5～50%アップ' },
  { name: 'ダメージバフ強化【B】', effect: 'ブレイカーへ与えるダメージ強化の効果量5～50%アップ' },
  { name: '物理/魔法耐性アップ強化', effect: '対象が与える「物理被ダメージダウン」と「魔法被ダメージダウン」の効果量4～40%アップ' },
  { name: 'ぷにダメージ軽減', effect: 'ぷに種族から受けるダメージ2～15%ダウン' },
  { name: '獣ダメージ軽減', effect: '獣種族から受けるダメージ2～15%ダウン' },
  { name: '精霊ダメージ軽減', effect: '精霊種族から受けるダメージ2～15%ダウン' },
  { name: '鳥ダメージ軽減', effect: '鳥種族から受けるダメージ2～15%ダウン' },
  { name: '水棲ダメージ軽減', effect: '水棲種族から受けるダメージ2～15%ダウン' },
  { name: '剛力の呪詛', effect: '対象に「受ける物理攻撃のダメージ1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '斬の呪詛', effect: '対象に「斬属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '打の呪詛', effect: '対象に「打属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '突の呪詛', effect: '対象に「突属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '魔力の呪詛', effect: '対象に「受ける魔法攻撃のダメージ1～8%アップ」を1回攻撃を受けるまで付与' },
  { name: '火の呪詛', effect: '対象に「火属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '氷の呪詛', effect: '対象に「氷属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '風の呪詛', effect: '対象に「風属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '雷の呪詛', effect: '対象に「雷属性耐性1～10%ダウン」を1回攻撃を受けるまで付与' },
  { name: '物理/魔法耐性ダウン強化', effect: '対象が与える「物理被ダメージアップ」と「魔法被ダメージアップ」の効果量4～40%アップ' },
  { name: '大きな回復量', effect: '与えるHP回復量1～8%アップ' },
  { name: '単体回復ボーナス', effect: '単体回復が与えるHP回復量2～15%アップ' },
  { name: '全体回復ボーナス', effect: '全体回復が与えるHP回復量1～10%アップ' },
  { name: '使い切り回復強化', effect: '使用回数が1回の時、HP回復量2～18%アップ' },
  { name: '回復量上昇【渾身】', effect: 'HP満タン時、与えるHP回復量4～35%アップ' },
  { name: '回復量上昇【背水】', effect: 'HPが50%以下の時、与えるHP回復量4～40%アップ' },
  { name: '回復量上昇', effect: '与えるHP回復量2～15%アップ' },
  { name: '単体回復量上昇', effect: '味方単体回復が与えるHP回復量3～25%アップ' },
  { name: '全体回復量上昇', effect: '味方全体回復が与えるHP回復量3～25%アップ' },
  { name: '回復量上昇【D】', effect: 'ディフェンダーへ与えるHP回復量4～35%アップ' }
];
