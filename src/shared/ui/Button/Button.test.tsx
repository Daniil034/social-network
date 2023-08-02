import { render } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('is rendered in the document', () => {
        const { getByTestId } = render(<Button variant="clear">TEST</Button>);
        expect(getByTestId('button-test')).toBeInTheDocument();
    });
    test('clear variant has a \'clear\' class', () => {
        const { getByTestId } = render(<Button variant="clear">TEST</Button>);
        expect(getByTestId('button-test')).toHaveClass('clear');
    });
});
