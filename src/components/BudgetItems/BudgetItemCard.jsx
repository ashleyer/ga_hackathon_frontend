import React from 'react';
import BudgetActions from './BudgetActions'
import {Wrapper} from './BudgetItemCard-styles'

const BudgetItemCard = props => {
  return (
    <Wrapper>
      <p>{props.item.itemName}</p>
      <p>${props.item.itemPrice}</p>
      <BudgetActions {...props}/>
    </Wrapper>
  )
}

export default BudgetItemCard