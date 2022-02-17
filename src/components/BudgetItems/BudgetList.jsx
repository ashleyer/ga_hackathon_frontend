import React from 'react';
import BudgetItemCard from './BudgetItemCard'

const BudgetList = ({ budget, handleDeleteBudgetItem}) => {
  return (
    <>
      {budget?.map((item) => (
        <BudgetItemCard
          item={item}
          handleDeleteBudgetItem={handleDeleteBudgetItem}
          key={item._id}
        />
      ))}
    </>
  )
}

export default BudgetList