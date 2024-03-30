import React from 'react'

function LearningProps({ values, func, index }) {
    const { image, name, profession, friends } = values;
    return (
        <div className='w-60 bg-white rounded overflow-hidden'>
            <div className='w-full h-44 bg-blue-100'>
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className='w-full p-3'>
                <h2 className='text-lg font-semibold font-mono'>{name}</h2>
                <h3 className='text-sm font-medium font-sans mb-1'>{profession}</h3>
                <button onClick={() => func(index)} className={`px-3 py-1 ${friends ? "text-black" : "text-white"} ${friends ? "bg-green-500" : "bg-blue-500"} text-xs rounded-md`}>{friends ? "Friends" : "Add Friend"}</button>
            </div>

        </div>
    )
}

export default LearningProps


//Basic of Props
// function LearningProps({ text, color, tColor }) {
//     return (
//         <button className={`px-2 py-1 m-4 ${color} rounded text-base ${tColor}`}>{text}</button>
//     )
// }