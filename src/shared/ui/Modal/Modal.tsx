import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

type Props = {
    className?: string,
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
    lazy?: boolean,
};

const TIMEOUT_DELAY = 100;

export function Modal(props: Props) {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy = true,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleCloseClick = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, TIMEOUT_DELAY);
    }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleCloseClick();
        }
    }, [handleCloseClick]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [handleKeyDown]);

    const classes: Record<string, boolean> = {
        [styles.open]: isOpen,
        [styles.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, classes, [className, 'appModal'])}>
                <div
                    className={styles.overlay}
                    onClick={handleCloseClick}
                >
                    <div className={styles.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
