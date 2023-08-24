import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

type Props = {
    className?: string;
}

const reducers = {
    profile: profileReducer,
};

export default function ProfilePage(props: Props) {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={className}>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
}
