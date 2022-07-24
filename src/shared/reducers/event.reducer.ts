import {eventList, selection} from '../types'

export const eventReducer = (state = [], action: any) => {
    switch (action.type) {
        case '@event/init': return action.payload
        case '@event/bet': return action.payload
        case '@event/updateBet':
            /*
              This is not of complexity (n x m x d) it is of complexity (n + m + d).
                -n: total elements in event
                -m total elements in market and
                -d total elements in selection.
              Instead of using triple map lodash could be used.
            */
            let temporalState: eventList[] = [...state]
            temporalState.map((event: eventList) => {
                if (event.id === action.payload.event_id) {
                    event.markets.map((market) => {
                        if (market.id === action.payload.market_id) {
                            market.selections.map((selection) => {
                                if (selection.id === action.payload.id) {
                                    selection.isAposted = !selection.isAposted
                                }
                                return selection
                            })
                        }
                        return market
                    })
                }
                return event
            })
            console.log(temporalState)
            return [...temporalState]
        default: return state
    }
}

export const initEvent = (events: eventList[]) => {
    return {
        type: '@event/init',
        payload: events
    }
}

export const updateEvent = (bet: selection) => {
    return {
        type: '@event/updateBet',
        payload: bet
    }
}

