import React from 'react'

function Profile() {
    return (
        <div className='card shadow p-5 me-2'>
            <div>
                <h3>My profile</h3>

            </div>

            <div className='mt-3 row justify-content-center'>
                <label className='text-center' htmlFor='profile'>
                    <input type="file" id='profile' style={{ display: 'none' }} />
                    <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" width={'100px'} height={'80px'} alt="img" />

                </label>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='Enter your User Name' />
                </div>

                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='Enter your LinkdIn ID' />
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='Enter your Github ID' />
                </div>

            </div>

        </div>
    )
}

export default Profile