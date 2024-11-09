import clsx from "clsx";
import React, { useEffect, useState } from "react";

import ExternalSwitch from "@/components/Switch";

type FigureProp = { img_src: string; caption: React.ReactNode; isDark: boolean; idx: number; }

const Figure = ({ img_src, caption, isDark, idx }: FigureProp) => {
  const caption_clr = isDark ? 'text-gray-400' : 'text-gray-600';

  const [invert_prop, set_invert_prop] = useState<'invert' | 'invert-0'>(isDark ? 'invert' : 'invert-0');
  useEffect(() => {
    set_invert_prop(isDark ? 'invert' : 'invert-0');
  }, [isDark]);

  return (
    <figure className='flex flex-col items-center justify-center'>
      <img src={img_src} className={clsx('w-full h-auto rounded-md p-2 transition', invert_prop,
        invert_prop === 'invert' ? 'bg-gray-200' : ''
      )} />
      {
        isDark ?
          <div className={clsx(caption_clr, "text-sm", invert_prop === 'invert' ? 'text-primary-500' : '')}>
            <span>Color Inversion {invert_prop === 'invert' ? "ON" : "OFF"} </span>
            <ExternalSwitch state={invert_prop === 'invert'} switch_state={() => set_invert_prop(invert_prop === 'invert' ? 'invert-0' : 'invert')} size="small" />
          </div> : null
      }
      <figcaption className={clsx(caption_clr, 'mt-2', 'font-light')}>Figure {idx}. {caption}</figcaption>
    </figure>
  );
}

export default Figure;

