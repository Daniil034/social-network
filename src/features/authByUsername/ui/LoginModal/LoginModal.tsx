import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginForm } from '../LoginForm/LoginForm.async';

type Props = {
    className?: string,
    isOpen: boolean,
    onClose: () => void
};

export function LoginModal(props: Props) {
    const { className, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
            <Suspense fallback={<Loader />}>
                <LoginForm onLoginSuccess={onClose} />
            </Suspense>
        </Modal>
    );
}
