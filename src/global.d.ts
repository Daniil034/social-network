declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
    import { FunctionComponent, SVGAttributes } from 'react';

    const content: FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
