import { GroceryStore } from '../model/grocerystore';

export const STORE_SAVE = 'STORE_SAVE';
export const STORE_SELECT = 'STORE_SELECT';

export function storeReducer(state: GroceryStore[] = [],
                             action: {type: string, payload: GroceryStore[]}) {
  switch (action.type) {
    case STORE_SAVE:
      return action.payload;
    default:
      return state;
  }
}

export function storeSelectReducer(state: GroceryStore,
                                   action: {type: string, payload: GroceryStore}) {
  switch (action.type) {
    case STORE_SELECT:
      return action.payload;
    default:
      return state;
  }
}
