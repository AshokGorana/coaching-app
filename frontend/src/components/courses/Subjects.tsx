import type { JSX } from 'react'

function Subject(): JSX.Element {

    return (
        <div className="w-full flex items-center justify-center py-5 text-white border-2 border-white">
            <div className='border-2 border-white py-4'>
                <h2 className='pb-4 text-2xl'>Discover the perfect online program</h2>

                <div className='flex gap-10'>
                    <div className='bg-[#1a243a] w-70 rounded-2xl grid grid-flow-cols-3 gap-4'>
                          <div className='col-span-3 border-2 border-white'>JEET</div>
                          <div className='border-2 border-white px-4'>View -</div>
                          <div className='border-2 border-white '>JEET</div>
                    </div>
                    <div className='bg-[#1a243a] px-40 rounded-2xl py-34'></div>
                    <div className='bg-[#1a243a] px-40 rounded-2xl py-34'></div>
                </div>
            </div>
        </div>
    )
}

export default Subject