import { classNames } from './classNames';

describe('classNames', () => {
    test('with one class', () => {
        const expected = 'class1';
        expect(classNames('class1')).toBe(expected);
    });
    test('with additional classes', () => {
        const expected = 'class1 class2 class3';
        expect(classNames('class1', {}, ['class2', 'class3'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'class1 class2 class3 hovered scrollable';
        expect(classNames('class1', {
            hovered: true, scrollable: true,
        }, ['class2', 'class3'])).toBe(expected);
    });
    test('with some mods disabled', () => {
        const expected = 'class1 class2 class3 hovered';
        expect(classNames('class1', {
            hovered: true, scrollable: false,
        }, ['class2', 'class3'])).toBe(expected);
    });
    test('with some mods undefined', () => {
        const expected = 'class1 class2 class3 hovered';
        expect(classNames('class1', {
            hovered: true, scrollable: undefined,
        }, ['class2', 'class3'])).toBe(expected);
    });
});
