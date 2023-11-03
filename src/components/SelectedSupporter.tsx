import React from 'react';
import Image from 'next/image';
import { Supporter } from '@/types/Supporter';
import { traits } from '../../resource/traits';

type SelectedPartnerProps = {
  supporter: Supporter;
};

const SelectedSupporter: React.FC<SelectedPartnerProps> = ({ supporter }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className={`flex-none mask mask-squircle bg-gradient-to-r from-${supporter?.giftColorNameIn} from-45% via-white to-${supporter?.giftColorNameOut} to-55%`} style={{ padding: 3 }}>
          <div className="flex-none mask mask-squircle w-12 h-12">
            <Image src="/48x48.png" alt="" fill />
          </div>
        </div>
      </div>
      <div className='leading-4'>
        {supporter?.traits.map((trait) => (
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

export default SelectedSupporter;
