'use client';

export function GlowFilter() {
  return (
    <svg className="filters" width='1440px' height='300px' viewBox='0 0 1440 300' xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-4" colorInterpolationFilters="sRGB" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30"/>
          <feColorMatrix in="blur4" result="color-0-blur" type="matrix" 
            values="1 0 0 0 0 0 0.9803921568627451 0 0 0 0 0 0.9647058823529412 0 0 0 0 0 0.8 0"/>
          <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0"/>
          <feColorMatrix in="blur19" result="color-1-blur" type="matrix" 
            values="0.8156862745098039 0 0 0 0 0 0.49411764705882355 0 0 0 0 0 0.2627450980392157 0 0 0 0 0 1 0"/>
          <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2"/>
          <feColorMatrix in="blur9" result="color-2-blur" type="matrix" 
            values="1 0 0 0 0 0 0.6666666666666666 0 0 0 0 0 0.36470588235294116 0 0 0 0 0 0.65 0"/>
          <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2"/>
          <feMerge>
            <feMergeNode in="layer-0-offsetted"/>
            <feMergeNode in="layer-1-offsetted"/>
            <feMergeNode in="layer-2-offsetted"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}