import { createSlice } from '@reduxjs/toolkit';


const auctionItemsSlice = createSlice({
  name: 'auctionItems',
  initialState: [],
  reducers: {
    addAuctionItem(state = auctionItemsSlice.initialState, action) {
      const { name, description, startingPrice } = action.payload
      console.log({name, description, startingPrice})
      state.push({
        name: name,
        description: description,
        startingPrice: startingPrice,
      })
    },
  }
})

export const { addAuctionItem } = auctionItemsSlice.actions

export default auctionItemsSlice.reducer

// for testing purposes
// console.log(addAuctionItem({ id: 24, name: 'test', description: 'tester', startingPrice: 6969 }))