import React, { useState } from 'react'

function MastertingState() {
    const [val, setVal] = useState([
        { name: 'kohli', age: 26 },
        { name: 'Sharma', age: 32 },
        { name: 'Ashwin', age: 42 },
    ]);
    return (
        <div className='p-5'>
            {val.map((item) => (
                <div>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                </div>
            ))}
            <button onClick={() => setVal(() => val.map(item => item.name === 'Sharma' ? ({ name: 'Sharma', age: 50}) : item))
            } className='px-2 py-1 mt-2 text-sm rounded text-white bg-blue-500'>Change</button>
        </div>
    )
}

export default MastertingState

// for popping the elements of array
// onClick={() => setVal(val.filter((item, index) => {
//     return index != val.length - 1
// }))
// }

// for removing elements from the array on given conditions
// onClick={() => setVal(val.filter(item => item%2 !== 0))
// }