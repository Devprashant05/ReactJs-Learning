import React, { useState } from 'react';
import Card from './Components/Card';
import EventsHandling from './Components/EventsHandling';
import LearningState from './Components/LearningState';
import MastertingState from './Components/MastertingState';
import StateProject from './Components/StateProject';
import LearningProps from './Components/LearningProps';

function App() {

  const data = [
    { name: 'Prashant', profession: 'Coder', image: 'https://images.unsplash.com/photo-1553532145-24463eb31260?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvdHJhaXR8ZW58MHwwfDB8fHww', friends: false },
    { name: 'Amit', profession: 'Singer', image: 'https://images.unsplash.com/photo-1547864728-a8711c0d6a52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBvdHJhaXR8ZW58MHwwfDB8fHww', friends: false },
    { name: 'Kohli', profession: 'Crickter', image: 'https://images.unsplash.com/photo-1644941339764-dcdcfbae0fbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxwb3RyYWl0fGVufDB8MHwwfHx8MA%3D%3D', friends: false },
    { name: 'Nisha', profession: 'Developer', image: 'https://images.unsplash.com/photo-1634746709400-caa196a7d43f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvdHJhaXR8ZW58MHwwfDB8fHww', friends: false },
  ]

  const [realData, setRealData] = useState(data);
  const handleFriendsClick = (btnIndex) => setRealData((prev) => {
    return prev.map((item, index) => {
      if (index === btnIndex) {
        return { ...item, friends: !item.friends };
      }
      return item
    })
  })

  return (
    <>
      <div className='w-full h-screen bg-zinc-400 flex items-center justify-center gap-3'>
        {realData.map((item, index) => (
          <LearningProps values={item} key={index} func={handleFriendsClick} index={index} />
        ))}
      </div>
    </>
  )
}

export default App;



// learningProps
{/* <LearningProps text="Learn more" color="bg-blue-500" tColor="text-white" />
<LearningProps text="Download" color="bg-red-500" tColor="text-black" /> */}