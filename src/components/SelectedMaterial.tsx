import { Material } from '@/types/Material';
import Image from 'next/image';
import React from 'react';
import { traits } from '../../resource/traits';

type SlectedMaterialProps = {
  material: Material
};

const SelectedMaterial: React.FC<SlectedMaterialProps> = ({ material }) => {
  return (
    <div>
      <div className="avatar">
        <div className={`flex-none mask mask-squircle bg-gift-${material?.giftColor}`} style={{ padding: 3 }}>
          <div className="flex-none mask mask-squircle w-12 h-12">
            <Image src="/48x48.png" alt="" fill />
          </div>
        </div>
      </div>
      <div className='leading-4'>
        {material?.traits.map((trait) => (
          <div key={trait}>
            <div className="tooltip tooltip-left" data-tip={traits.find((t) => t.name === trait)?.effect}>
              <span className="badge badge-ghost badge-sm bg-neutral p-2 text-white">{trait}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedMaterial;
