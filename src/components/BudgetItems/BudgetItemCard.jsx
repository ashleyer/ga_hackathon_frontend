import React from 'react';
import BudgetActions from './BudgetActions'

const BudgetItemCard = props => {
  return (
    <div>
      <p>{props.item.itemName}</p>
      <p>${props.item.itemPrice}</p>
      <BudgetActions {...props}/>
    </div>
  )
}

export default BudgetItemCard