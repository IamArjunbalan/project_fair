import React from 'react'
import Addprojects from './Addprojects'

function Myprojects() {
  return (
    <div className='card shadow p-3 m-2'>
      <div className=' d-flex justify-content-between'>

        <h2>My Projects</h2>
        <Addprojects/>
      </div>
      <div className='mt-3'>
        {/* user added projects */}
        <div className='border rounded shadow m-2'>
          <div className='d-flex justify-content-between p-3'>
            <h4>Project Title</h4>
            <div>
              <button className='btn'><i class="fa-brands fa-github fa-2x"></i></button>
              <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
              <button className='btn'><i class="fa-solid fa-trash fa-2x"></i></button>
            </div>

          </div>
        </div>
        <div > <h4 className='text-primary'>No Projects uploaded!!</h4></div>
      </div>
    </div>
  )
}

export default Myprojects