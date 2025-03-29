import * as React from 'react';
import type { SVGProps } from 'react';
export const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M21.5 3h-2.75a.25.25 0 0 1-.25-.25V1a1 1 0 0 0-2 0v4.75a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75V3.5a.5.5 0 0 0-.5-.5H8.25A.25.25 0 0 1 8 2.751V1a1 1 0 1 0-2 0v4.75a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75V3.5A.5.5 0 0 0 4 3H2.5a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM21 22H3a.5.5 0 0 1-.5-.5v-12A.5.5 0 0 1 3 9h18a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5Z"
      fill="currentColor"
    />
  </svg>
);

export const SvgCalendarNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
<g>
	<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="46" y1="10" x2="18" y2="10"/>
	<polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="12,10 1,10 1,58 63,58 63,10 52,10 	"/>
	<rect x="12" y="6" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="6" height="8"/>
	<rect x="46" y="6" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="6" height="8"/>
</g>
<polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="34,30 42,38 
	34,46 "/>
<g>
	<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="42" y1="38" x2="22" y2="38"/>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="1" y1="18" x2="63" y2="18"/>
  </svg>
);



export const SvgCalendarPrev = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
<g>
	<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="46" y1="10" x2="18" y2="10"/>
	<polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="12,10 1,10 1,58 63,58 63,10 52,10 	"/>
	<rect x="12" y="6" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="6" height="8"/>
	<rect x="46" y="6" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="6" height="8"/>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="1" y1="18" x2="63" y2="18"/>
<polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="30.001,46 
	22.001,38 30.001,30 "/>
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="22.001" y1="38" x2="42.001" y2="38"/>
 </svg>
);
