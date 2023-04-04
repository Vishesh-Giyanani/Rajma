import React from 'react'

const Flex = () => {
  return (
    <div className='flex flex-wrap  gap-4 h-[500px] '>
        <div className="bg-red-500 text-white h-26 flex-auto ">
            <p>
                Flex Item 1
            </p>

        </div>

        <div className="bg-blue-500 text-white h-26 flex-auto">
            <p>
                Flex Item 2
            </p>

        </div>

        <div className="bg-yellow-500 text-white h-26 ">
            <p>
                Flex Item 3
            </p>

        </div>
    </div>
  )
}

export default Flex