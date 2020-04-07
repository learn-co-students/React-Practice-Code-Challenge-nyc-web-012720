import React from 'react'

const AddBalanceForm = (props) => {
    return <form onSubmit={props.handleBalanceSubmit}>
    <label>
      Add Balance:
      <input type="text" value={props.balanceInput} onChange={props.handleBalanceInput} />
    </label>
    <input type="submit" value="Submit" />
  </form>
}

export default AddBalanceForm