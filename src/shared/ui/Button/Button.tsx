import { ComponentProps, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type ButtonVariants = 'clear'

type ButtonProps = {
    className?: string,
    variant?: ButtonVariants,
    children: ReactNode
} & ComponentProps<'button'>;

export function Button(props: ButtonProps) {
    const {
        children, className, variant = 'clear', ...restProps
    } = props;
    return (
        <button
            data-testid="button-test"
            type="button"
            className={classNames(styles.Button, {}, [className, styles[variant]])}
            {...restProps}
        >
            {children}
        </button>
    );
}
