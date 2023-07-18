import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink";

type Props = {
    className?: string
};

export function Navbar({className}: Props) {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" theme="secondary">Main page</AppLink>
                <AppLink to="/about" theme="secondary">About page</AppLink>
            </div>
        </div>
    );
};