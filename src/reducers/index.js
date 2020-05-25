import { combineReducers } from 'redux';
import auctionItemsReducer from '../components/Features/AuctionItems/auctionItemsSlice';

export default combineReducers({
  auctionItems: auctionItemsReducer
})