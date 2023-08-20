import { ComponentProps, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type ButtonVariants = 'clear' | 'clearInverted' | 'normal' | 'outlined'

type ButtonProps = {
    className?: string,
    variant?: ButtonVariants,
    // disabled?: boolean,
    children: ReactNode
} & ComponentProps<'button'>;

export function Button(props: ButtonProps) {
    const {
        children,
        className,
        variant = 'normal',
        disabled,
        ...restProps
    } = props;

    const mods: Record<string, boolean | undefined> = {
        [styles.disabled]: disabled,
    };

    return (
        <button
            data-testid="button-test"
            type="button"
            className={classNames(styles.Button, mods, [className, styles[variant]])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
}
