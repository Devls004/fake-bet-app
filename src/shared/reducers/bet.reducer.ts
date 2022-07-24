import { bet } from '../types';

export const betListReducer = (
  state: bet[] = [],
  action: { type: string; payload: bet }
) => {
  switch (action.type) {
    case '@bet/ADD_BET':
      return [...state, action.payload];
    case '@bet/DELETE_BET':
      return state.filter((bet) => bet.id !== action.payload.id);
    default:
      return state;
  }
};

export const addBet = (bet: any) => {
  return {
    type: '@bet/ADD_BET',
    payload: bet,
  };
};

export const deleteBet = (bet: any) => {
  return {
    type: '@bet/DELETE_BET',
    payload: bet,
  };
};
