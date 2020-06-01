import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let nextId = 0

const auctionItemsSlice = createSlice({
  name: 'auctionItems',
  initialState: {},
  reducers: {
    addAuctionItem(state, action) {
      axios
        .post('https://silentauction-bw.herokuapp.com/auctioneer/1/items', action.payload)
        .then( response => {
        console.log(response, action.payload)
        })
        .catch(err => console.log(err))  
    },
    placeBid(state, action) {
      axios
        .post('https://silentauction-bw.herokuapp.com/item/1/lenny/2', action.payload)
        .then(response => {
          console.log(response)
        })
    }
  }
})

export const { addAuctionItem } = auctionItemsSlice.actions

export default auctionItemsSlice.reducer
