import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/authByUsername/ui/LoginForm/LoginForm';

type Props = {
    className?: string,
    isOpen: boolean,
    onClose: () => void
};

export function LoginModal(props: Props) {
    const { className, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} className={className}>
            <LoginForm />
        </Modal>
    );
}
