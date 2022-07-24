import { bet } from '../types'

export const betVariable: bet = {
    name: 'Alemania VS Brasil',
    percent: 0.12,
    id: '32132123',
}

export const makeBetIterator = (props: Partial<bet> = {},): bet => ({ ...betVariable, ...props })

export const makeBetsData = (
    props: Partial<bet[]> = [],
): bet[] => (
    [{ ...makeBetIterator({}), ...props }]
);