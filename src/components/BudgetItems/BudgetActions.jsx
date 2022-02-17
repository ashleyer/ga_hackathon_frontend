import React from 'react';

const BudgetActions = props => {
  return (
    <>
      <button onClick={() => props.handleDeleteBudgetItem(props.item._id)}>
        X
      </button>
    </>
  )
}

export default BudgetActions