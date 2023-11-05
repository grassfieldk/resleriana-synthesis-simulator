import SelectedMaterial from '@/components/SelectedMaterial';
import SelectedSupporter from '@/components/SelectedSupporter';
import { Material } from '@/types/Material';
import { Supporter } from '@/types/Supporter';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import { characters } from '../../resource/characters';
import { colors } from '../../resource/colors';
import { materials } from '../../resource/materials';
import { traits } from '../../resource/traits';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const supporters: Supporter[] = characters.map((character) => ({
    id: character.id,
    name: character.name,
    title: character.title,
    traits: character.traits,
    giftColorNameIn: colors.find((color) => color.id === character.giftColorIn)?.colorName,
    giftColorNameOut: colors.find((color) => color.id === character.giftColorOut)?.colorName
  }));
  const initialSupporter: Supporter = { id: '0', name: 'initial', title: '', traits: ['会心の出来', '雷の呪詛', '斬耐性上昇'], giftColorNameIn: 'gift-red', giftColorNameOut: 'gift-green' };
  const initialMaterial: Material = { id: '0', rarity: 3, name: 'initial', giftColor: 'red', traits: ['会心の出来', '雷の呪詛', '斬耐性上昇'] };

  const [activeSupporter, setActiveSupporter] = useState<number>(0);
  const [supporter1, setSupporter1] = useState<Supporter>(initialSupporter);
  const [supporter2, setSupporter2] = useState<Supporter>(initialSupporter);
  const [material, setMaterial] = useState<Material>(initialMaterial);

  const selectSupporter = (supporter: Supporter) => {
    if (activeSupporter === 1) {
      setSupporter1(supporter);
    } else if (activeSupporter === 2) {
      setSupporter2(supporter);
    }
  };

  return (
    <main className={`flex flex-col min-h-screen p-2 md:p-12 ${inter.className}`}>
      <h1 className="text-xl font-semibold mb-8">レスレリアーナのアトリエ 調合シミュレータ</h1>
      {/* 調合エリア */}
      <div className="container mx-auto mb-4">
        <div className="grid grid-cols-3">
          <div onClick={() => setActiveSupporter(1)} className={'p-3 rounded-3xl bg-opacity-20 ' + (activeSupporter === 1 ? 'bg-secondary ' : 'bg-transparent')}>
            <SelectedSupporter supporter={supporter1} />
          </div>
          <div onClick={() => setActiveSupporter(2)} className={'p-3 rounded-3xl bg-opacity-20 ' + (activeSupporter === 2 ? 'bg-secondary' : 'bg-transparent')}>
            <SelectedSupporter supporter={supporter2} />
          </div>
          <div className={'p-3 rounded-3xl'}>
            <SelectedMaterial material={material} />
          </div>
        </div>
      </div>
      {/* キャラクター一覧 */}
      <div className="container mx-auto mb-4">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>キャラクター</th>
                <th>特性</th>
              </tr>
            </thead>
            <tbody>
              {supporters.map((supporter) => {
                return (
                  <tr key={supporter.id} onClick={() => selectSupporter(supporter)}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div
                            className={`flex-none mask mask-squircle bg-gradient-to-r from-${supporter.giftColorNameIn} from-40% via-gray-200 to-${supporter.giftColorNameOut} to-60%`}
                            style={{ padding: 3 }}
                          >
                            <div className="flex-none mask mask-squircle w-12 h-12">
                              <Image src="/48x48.png" alt="" fill />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">{supporter.name}</div>
                          <div className="text-xs text-secondary opacity-80">{supporter.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {supporter.traits.map((trait) => (
                        <div key={trait}>
                          <div className="tooltip tooltip-left" data-tip={traits.find((t) => t.name === trait)?.effect}>
                            <span className="badge badge-ghost badge-sm bg-neutral p-2 text-white">{trait}</span>
                          </div>
                        </div>
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* 動的生成クラスをコンパイルさせる */}
        <div className="from-gift-red to-gift-red hidden"></div>
        <div className="from-gift-green to-gift-green hidden"></div>
        <div className="from-gift-blue to-gift-blue hidden"></div>
        <div className="from-gift-yellow to-gift-yellow hidden"></div>
        <div className="from-gift-purple to-gift-purple hidden"></div>
      </div>
      {/* 素材一覧 */}
      <div className="container mx-auto mb-4">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>素材</th>
                <th>特性</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => {
                return (
                  <tr key={material.name} onClick={() => setMaterial(material)}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className={`flex-none mask mask-squircle bg-gift-${material.giftColor}`} style={{ padding: 3 }}>
                            <div className="flex-none mask mask-squircle w-12 h-12">
                              <Image src="/48x48.png" alt="" fill />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">{material.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {material.traits.map((trait) => (
                        <div key={trait}>
                          <div className="tooltip tooltip-left" data-tip={traits.find((t) => t.name === trait)?.effect}>
                            <span className="badge badge-ghost badge-sm bg-neutral p-2 text-white">{trait}</span>
                          </div>
                        </div>
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* 動的生成クラスをコンパイルさせる */}
        <div className="bg-gift-red"></div>
        <div className="bg-gift-green hidden"></div>
        <div className="bg-gift-blue hidden"></div>
        <div className="bg-gift-yellow hidden"></div>
        <div className="bg-gift-purple hidden"></div>
      </div>
    </main>
  );
}
