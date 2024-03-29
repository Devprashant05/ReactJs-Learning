import React, { useState } from 'react'

function LearningState() {
    const [val, setVal] = useState({ name: 'Prashant', isbanned: false })
    return (
        <div className='p-5'>
            <h1>{val.name}</h1>
            <h2>{val.isbanned.toString()}</h2>
            <button onClick={
                () => setVal({ ...val, isbanned: !val.isbanned })
            }
                className={`px-2 py-1 ${val.isbanned ? "bg-blue-500" : "bg-red-500"} text-md text-white rounded mt-4`}>Change</button>
        </div>
    )
}

export default LearningState
