import React from 'react'

const HeadLindCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-6 py-10 grid md:grid-cols-3 gap-9'>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 py-4'>Sun's out, BOGO's out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full'> Order Now</button>
                </div>
                <img className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg" alt="/" />
            </div>

            {/* cards */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 py-4'>Sun's out, BOGO's out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full'> Order Now</button>
                </div>
                <img className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg" alt="/" />
            </div>

            {/* cards */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 py-4'>Sun's out, BOGO's out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full'> Order Now</button>
                </div>
                <img className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl' src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg" alt="/" />
            </div>

        </div>
    )
}

export default HeadLindCards
