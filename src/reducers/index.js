import { combineReducers } from 'redux';
import auctionItemsReducer from '../auctionItemsSlice';

export default combineReducers({
  auctionItems: auctionItemsReducer
})