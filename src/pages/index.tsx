import { Inter } from 'next/font/google';
import Image from 'next/image';
import { characters } from '../../resource/characters';
import { traits } from '../../resource/traits';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex flex-col min-h-screen p-2 md:p-12 ${inter.className}`}>
      <h1 className="text-xl font-semibold mb-8">レスレリアーナのアトリエ 調合シミュレータ</h1>
      {/* 調合エリア */}
      <div className="container mx-auto mb-4"></div>
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
              {characters.map((character) => (
                <tr key={character.id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="flex-none mask mask-squircle bg-gradient-to-r from-red-500 from-45% via-white to-yellow-500 to-55%" style={{padding: 2}}>
                          <div className="flex-none mask mask-squircle w-12 h-12">
                            <Image src="/48x48.png" alt="" layout="fill" objectFit="cover" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">{character.name}</div>
                        <div className="text-xs text-secondary opacity-80">{character.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {character.traits.map((trait) => (
                      <div key={trait}>
                        <div className="tooltip tooltip-left" data-tip={traits.find((t) => t.name === trait)?.effect}>
                          <span className="badge badge-ghost badge-sm bg-neutral p-2 text-white">{trait}</span>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* 素材一覧 */}
      <div className="container mx-auto mb-4"></div>
    </main>
  );
}
