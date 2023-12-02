import React from 'react'

function Modal({visible, rating, close}) {
    if(!visible) return null;
    
  return (
    <div className='fixed inset-0 bg-black h-screen bg-cover px-2 py-20 md:py-28 md:px-96'>
      <div className='  bg-slate-900 py-5 px-4 md:px-14 rounded-3xl md:mx-16'>
        <img className='w-40 ml-12 md:ml-24 mt-5 mb-8' src="/images/illustration-thank-you.svg" alt="thank-you" />
        <p className='text-orange-500 text-md bg-slate-800 mx-10 md:mx-20 px-4 mb-6 py-1 rounded-2xl '>you selected {rating} out of 5</p>
        <h2 className='text-white text-3xl  font-medium ml-14 md:ml-24 px-2 mb-6'>Thank You!</h2>
        <p className='text-slate-300 block text-center mb-6'>We appreciate you taking the time to give rating.
             If you ever need more support, don't hesitate to get in touch! </p>
        <button onClick={close} className="bg-orange-500
         hover:bg-white hover:text-orange-500 rounded-3xl px-32 md:px-40 ml-2  md:ml-0 flex mb-6 justify-center py-2">Close</button>
      </div>
    </div>
  )
}

export default Modal
