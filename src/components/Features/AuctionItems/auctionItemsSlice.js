import { createSlice } from '@reduxjs/toolkit';

const auctionItemsSlice = createSlice({
  name: 'auctionItems',
  initialState: {
    auctionItemsArray: []
  },
  reducers: {
    addAuctionItem(state, action) {
      console.log(state, action)
      const { image, name, description, startingPrice } = action.payload
      console.log({image, name, description, startingPrice})
      state.auctionItemsArray.push({
        image: image,
        name: name,
        description: description,
        startingPrice: startingPrice,
      })
    },
  }
})

export const { addAuctionItem } = auctionItemsSlice.actions

export default auctionItemsSlice.reducer
