import { ReactNode } from 'react';

type ReactComponentWithChildren = (children: ReactNode) => ReactNode

export function reduceFunctions(...funcs: ReactComponentWithChildren[]):
    (children: any) => ReactNode {
    return (children: ReactNode) => funcs.reduceRight(
        (prevFunc, currentFunc) => currentFunc(prevFunc),
        children,
    );
}
