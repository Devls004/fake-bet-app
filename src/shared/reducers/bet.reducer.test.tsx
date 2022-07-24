import { betListReducer } from './bet.reducer'
import { makeBetsData, betVariable } from '../factories/bet.factorie'

describe('Note Reducer Test', () => {
    test('Return a new state, After adding a bet', () => {
        const state = makeBetsData([])
        const action = {
            type: '@bet/ADD_BET',
            payload: betVariable,
        }
        const newExpextedState = betListReducer(state, action)
        expect(newExpextedState).toHaveLength(2)
        expect(newExpextedState).toContainEqual(betVariable)
    })

    test('Return a new state, After deleting a bet', () => {
        const state = makeBetsData([])
        const action = {
            type: '@bet/DELETE_BET',
            payload: betVariable,
        }
        const newExpextedState = betListReducer(state, action)
        expect(newExpextedState).toHaveLength(0)
    })
})