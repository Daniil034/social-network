import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

type Props = {
    className?: string
}

export function PageLoader(props: Props) {
    const { className } = props;
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
}
