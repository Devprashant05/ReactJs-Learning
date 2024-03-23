import React from 'react';

function EventsHandling() {

    const data = [
        {
            name: 'Mahiya Ve',
            description: 'Cupiditate accusamus iusto eos error soluta eaque quia autem.'
        },
        {
            name: 'Junoon Ve',
            description: 'Aut ut non aut temporibus sint quidem litia. Quae et magnam.'
        }
    ];
    const handleEvents = () => alert('Chal rha h');

    return (
        <div className='w-full h-screen bg-zinc-500 flex flex-col gap-10 items-center justify-center'>
            {data.map((elem, index) => (
                <div className="song px-3 py-2 w-96 h-fit bg-zinc-200 rounded">
                    <h3 className='font-semibold text-lg mt-1 mb-2' key={index}>{elem.name}</h3>
                    <p className='text-sm mb-4' key={index}>{elem.description}</p>
                    <button onClick={handleEvents} className='px-3 py-1 bg-blue-600 text-zinc-100 rounded-md hover:text-zinc-800 mb-3'>Download Now</button>
                </div>
            ))}
        </div>
    )
}

export default EventsHandling;
