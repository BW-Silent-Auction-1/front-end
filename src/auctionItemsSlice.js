import { createSlice } from '@reduxjs/toolkit';

const auctionItemsSlice = createSlice({
  name: 'auctionItems',
  initialState: [],
  reducers: {
    addAuctionItem: {
      reducer(state, action) {
        const { name, img, description, startPrice, currentPrice } = action.payload
        state.push({ name, img, description, startPrice, currentPrice })
      },
      prepare(name, img, description, startPrice, currentPrice) {
        return {
          payload: {
            name, img, description, startPrice, currentPrice
          }
        }
      }
    }
  }
})

export const { addAuctionItem } = auctionItemsSlice.actions

export default auctionItemsSlice.reducer