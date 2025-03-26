import React from 'react'

const Card = ({ children }, key) => {
  return (
    <>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"> */}
      <div key={key} className="bg-gray-200 p-4 rounded font-bold">
        <div className="flex items-center">
          <img src="/Icon-Room/chat-group.png" alt="" className='object-cover w-12 h-12 mr-2' />
          {children}
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Card