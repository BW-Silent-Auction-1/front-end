import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let nextId = 0

const auctionItemsSlice = createSlice({
  name: 'auctionItems',
  initialState: {
    auctionItemsArray: []
  },
  reducers: {
    addAuctionItem(state, action) {
      axios
        .post('https://silentauction-bw.herokuapp.com/auctioneer/1/items', action.payload)
        .then( response => {
        console.log(response, action.payload)
        })
        .catch(err => console.log(err))  
    }
  },
    // getAuctionItems(state, action) {
    //   axios.get('https://silentauction-bw.herokuapp.com/item')
    //     .then(response => {
    //       console.log('getAuctionItems req res', response)
    //       // state.auctionItemsArray.push(response.data)
    //       const auctionItemsArr = response.data
    //       return auctionItemsArr 
    //     })
    //     .catch(err => console.log(err))
    // }
})

export const { addAuctionItem, getAuctionItems } = auctionItemsSlice.actions

export default auctionItemsSlice.reducer
