import { GroceryStore } from '../model/grocerystore';

export const STORE_SAVE = 'INCREMENT';

export function storeReducer(state: GroceryStore[], action: {type: string, payload: GroceryStore[]}) {
  switch (action.type) {
    case STORE_SAVE:
      return action.payload;
    default:
      return state;
  }
}
