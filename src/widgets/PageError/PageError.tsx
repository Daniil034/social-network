import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

export function PageError() {
    const { t } = useTranslation();

    const handleReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={styles.PageError}>
            {t('Loading error')}
            <button type="button" onClick={handleReload}>
                {t('Reload error button')}
            </button>
        </div>
    );
}
