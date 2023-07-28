import { ComponentProps, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type ButtonVariants = 'clear'

type ButtonProps = PropsWithChildren<{
    className?: string,
    variant?: ButtonVariants
} & ComponentProps<'button'>>;

export function Button(props: ButtonProps) {
    const {
        children, className, variant = 'clear', ...restProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[variant]])}
            {...restProps}
        >
            {children}
        </button>
    );
}
