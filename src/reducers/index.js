import { combineReducers } from 'redux';
import auctionItemsReducer from '../Redux-Auth/auctionItemsSlice';

export default combineReducers({
  auctionItems: auctionItemsReducer
})