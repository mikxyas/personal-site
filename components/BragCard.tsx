import React, { Component } from 'react'

type Props = {
}

type State = {}

export default class BragCard extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='bg-clip-padding backdrop-filter backdrop-blur-lg shadow-sm backdrop-saturate-150 bg-opacity-10 p-4 rounded-2xl row-span-1 bg-gray-300' style={{width:"239px"}}>
      <p className='font-semibold text-lg mb-2 ml-1'>Computer Science</p>
        <div className=' flex '>
          <div  className='text-center p-pill bg-gray-50 bg-opacity-20  rounded-pill m-1'>C & C++</div>
          <div className='text-center p-pill  bg-gray-50 bg-opacity-20 rounded-pill m-1'>Web</div>
        </div>
        <div className='flex '>
          <div className='text-center p-pill  bg-gray-50 bg-opacity-20  rounded-pill m-1'>Javascript</div>
          <div className='text-center p-pill bg-gray-50 bg-opacity-20  rounded-pill m-1'>App</div>
        </div>
        {/* <div className='flex '>
          <div className='text-center p-pill  bg-gray-50 bg-opacity-20  rounded-pill m-1'>Rust</div>
          <div className='text-center p-pill bg-gray-50 bg-opacity-20  rounded-pill m-1'>Python</div>
        </div> */}
      </div>
    )
  }
}