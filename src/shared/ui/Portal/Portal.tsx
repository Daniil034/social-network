import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    children: ReactNode,
    element?: HTMLElement,
};

export function Portal(props: Props) {
    const { children, element = document.querySelector('.App')! } = props;
    const [isDOMReady, setIsDomReady] = useState(false);

    useEffect(() => {
        setIsDomReady(true);
    }, []);

    return isDOMReady ? createPortal(children, element) : null;
}
