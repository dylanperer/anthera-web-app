import * as React from 'react';
import { SVGProps } from 'react';
const SvgPasswordIconInactive = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm-1-7.208a2.5 2.5 0 1 1 2 0V14H9v-3.208Z"
            fill="#93A0AE"
        />
    </svg>
);
export default SvgPasswordIconInactive;
