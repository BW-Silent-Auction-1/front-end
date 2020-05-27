import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAuctionItem } from './auctionItemsSlice';
import yup from 'yup';


const AddAuctionItem = (props) => {
  const [auctionItem, setAuctionItem] = useState({
    image: null,
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
    props.addAuctionItem(auctionItem)
    setAuctionItem({
      image: '',
      name: '',
      description: '',
      startingPrice: 0
    })
  }

  // for image uploading
  // const fileChangedHandler = event => {
  //   setAuctionItem({ 
  //     ...auctionItem,
  //     image: event.target.files[0] 
  //   })
  // }

  console.log('auctionItem + props', auctionItem, props)

  return (
    <div>
      <h2>Test Component</h2>

      <div>
        <form onSubmit={handleSubmit}>
          
          {/* <input 
            type='file'
            name='image'
            onChange={fileChangedHandler}
            placeholder='Add an image'
          /> */}

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

      <div>
        {props.auctionItemsArray.map(item => {
          return (
            <div key={item.id}>
              <p>Item name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>Starting price: {item.startingPrice}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    auctionItemsArray: state.auctionItems.auctionItemsArray
  }
}

const mapDispatchToProps = { addAuctionItem }

export default connect(mapStateToProps, mapDispatchToProps)(AddAuctionItem)