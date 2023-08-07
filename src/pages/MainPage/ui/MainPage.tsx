import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

export default function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('title')}
            <Counter />
        </div>
    );
}
