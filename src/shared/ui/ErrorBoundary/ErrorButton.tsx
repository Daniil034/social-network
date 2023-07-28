import { useEffect, useState } from 'react';

export function ErrorButton() {
    const [isError, setIsError] = useState(false);
    const handleThrowError = () => {
        setIsError(true);
    };

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <button type="button" onClick={handleThrowError}>
            Throw error
        </button>
    );
}
