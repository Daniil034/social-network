import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type Props = {
    className?: string
}

export function Loader(props: Props) {
    const { className } = props;
    return (
        <div className={classNames('lds-ring', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
