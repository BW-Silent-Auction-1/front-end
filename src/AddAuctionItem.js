import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAuctionItem } from './auctionItemsSlice';

const mapDispatch = { addAuctionItem }

// const auctionItem = {
//   name: '',
//   description: '',
//   startingPrice: 0
// }

const AddAuctionItem = ({ addAuctionItem }) => {
  const [auctionItem, setAuctionItem] = useState({
    name: '',
    description: '',
    startingPrice: 0
  })

  const handleChange = event => {
    setAuctionItem({
      ...auctionItem,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addAuctionItem(auctionItem)

    // setTimeout(() => {
    // }, 500)

      setAuctionItem({
        name: '',
        description: '',
        startingPrice: 0
      })
  }

  console.log(auctionItem)

  return (
    <div>
      <h2>Test Component</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='name'
            onChange={handleChange}
            value={auctionItem.name}
            placeholder='Name'
          />

          <input 
            type='text'
            name='description'
            onChange={handleChange}
            value={auctionItem.description}
            placeholder='Description'
          />

          <input 
            type='number'
            name='startingPrice'
            onChange={handleChange}
            value={auctionItem.startingPrice}
            placeholder='Starting price'
          />

          <button type='submit'>Add item</button>
        </form>
      </div>

    </div>
  )
}

export default connect(null, mapDispatch)(AddAuctionItem)