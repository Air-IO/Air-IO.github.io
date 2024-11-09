//@ts-nocheck
'use client';
import renderMathInElement from 'katex/dist/contrib/auto-render';
import { useEffect, useRef } from 'react';

import 'katex/dist/katex.min.css';

type KatexSpanProps = { text: string } & JSX.IntrinsicElements['span'];

export default function KatexSpan({ text, ...delegated }: KatexSpanProps) {
  const katexTextRef = useRef();
  useEffect(() => {
    if (katexTextRef.current) {
      renderMathInElement(katexTextRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
      });
    }
  }, [text]);

  return (
    <span ref={katexTextRef} {...delegated}>
      {text}
    </span>
  );
}