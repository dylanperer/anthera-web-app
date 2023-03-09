import * as React from 'react';
import { SVGProps } from 'react';
const SvgEmailIconInactive = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 0a10 10 0 0 0 0 20 9.99 9.99 0 0 0 4.442-1.1l-.885-1.8A8.03 8.03 0 0 1 10 18a8 8 0 1 1 8-8v1c0 .692-.313 2-1.5 2-1.4 0-1.494-1.819-1.5-2V6h-2v.025A4.954 4.954 0 0 0 10 5a5 5 0 1 0 3.662 8.379A3.127 3.127 0 0 0 16.5 15c2.273 0 3.5-2.061 3.5-4v-1A10.011 10.011 0 0 0 10 0Zm0 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            fill="#93A0AE"
        />
    </svg>
);
export default SvgEmailIconInactive;
