import React from 'react'

const DropDownMenu = () => {
  return (
    <div className='flex flex-col dropdown'>
      <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-800"> Filter</button>
    </div>
  )
}

export default DropDownMenu