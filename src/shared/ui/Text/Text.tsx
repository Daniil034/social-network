import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

type TextVariant = 'primary' | 'error'

type Props = {
    className?: string,
    title?: string,
    text?: string,
    variant?: TextVariant
};

export function Text(props: Props) {
    const {
        title,
        text,
        className,
        variant = 'primary',
    } = props;
    return (
        <div className={classNames('', { [styles[variant]]: true }, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
}
