import React, { useState } from "react"
import Modal from "./Modal"

function App() {
  const [rating, setRating] = useState()
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = () =>{
    if(rating===''){
      return  
    }
    else{
      setShowModal(true);
    }
  }

  const handleClose = () => {
    setShowModal(false);
    setRating('');
  }

  return (
    <>
      <div className="bg-black h-screen bg-cover px-5 py-20 md:py-28 md:px-96">
        <div className="text-white bg-slate-900 py-5 px-5 md:px-14 rounded-3xl md:mx-16">
          <img src="/images/icon-star.svg" alt="star" className="my-5 rounded-full px-4 py-4 bg-slate-800" />
          <h2 className="md:text-4xl text-2xl font-bold mb-6">How did we do?</h2>
          <p className="text-md mb-6 ">Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!</p>
          <div className="flex justify-between mt-7 mb-9">
            <button onClick={()=> setRating(1)} className="bg-slate-800 px-5 py-3 focus:bg-orange-500 hover:bg-slate-500 rounded-full">1</button>
            <button onClick={()=> setRating(2)} className="bg-slate-800 px-5 py-3 focus:bg-orange-500 hover:bg-slate-500 rounded-full">2</button>
            <button onClick={()=> setRating(3)} className="bg-slate-800 px-5 py-3 focus:bg-orange-500 hover:bg-slate-500 rounded-full">3</button>
            <button onClick={()=> setRating(4)} className="bg-slate-800 px-5 py-3 focus:bg-orange-500 hover:bg-slate-500 rounded-full">4</button>
            <button onClick={()=> setRating(5)} className="bg-slate-800 px-5 py-3 focus:bg-orange-500 hover:bg-slate-500 rounded-full">5</button>
          </div>
          <div className="flex justify-center my-5 ">
            <button onClick={handleSubmit} className="bg-orange-500  hover:bg-white hover:text-orange-500 rounded-3xl px-28 md:px-40 flex  justify-center py-3">SUBMIT</button>
          </div> 
        </div>
      </div>
      <Modal rating={rating} visible={showModal} close={handleClose} />
    </>
    
  )
}

export default App
