import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";

export function LanguageSwitcher() {
    const {t, i18n} = useTranslation("sidebar");

    const handleSwitchLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button variant="clear" onClick={handleSwitchLanguage}>
            {t("switch language button")}
        </Button>
    );
};