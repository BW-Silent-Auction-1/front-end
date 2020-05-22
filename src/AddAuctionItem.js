import React from 'react';
import { connect } from 'react-redux';
import { addAuctionItem } from './auctionItemsSlice';

const mapDispatch = { addTodo }

const AddAuctionItem = ({ addTodo }) => {
  return (
    <div>
      <h2>Test Component</h2>
    </div>
  )
}

export default connect(null, mapDispatch)(AddAuctionItem)