import React from 'react';

function Card() {
    const data = [
        {
            image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',
            name: 'Amazon Basics',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium similique nulla unde voluptatem. Dicta eaque at nihil provident totam fuga!',
            inStock: true,
        },
        {
            image: 'https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpciUyMGNvbmRpdGlvbmVyfGVufDB8fDB8fHww',
            name: 'Air Condtioner',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium similique nulla unde voluptatem. Dicta eaque at nihil provident totam fuga!',
            inStock: false,
        },
        {
            image: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',
            name: 'Daily Objects',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium similique nulla unde voluptatem. Dicta eaque at nihil provident totam fuga!',
            inStock: false,
        },
    ];
    return (
        <div className='w-full h-screen bg-zinc-200 flex items-center justify-center flex-wrap gap-10'>
            {data.map((item, index) => (
                <div className='w-80 h-fit bg-zinc-100 rounded-md overflow-hidden'>
                    <div className=' w-full h-32 bg-slate-500'>
                        <img className='w-full h-full object-cover object-bottom' src={item.image} alt="" />
                    </div>
                    <div className='w-full px-3 py-4'>
                        <h2 className='font-extrabold font-mono' key={index}>{item.name}</h2>
                        <p className='text-sm mt-3 font-sans' key={index}>{item.para}</p>
                        <button className={`px-4 py-2 ${item.inStock ? 'bg-yellow-300' : 'bg-red-500'} rounded-md text-sm font-medium hover:opacity-75 mt-4`}>
                            {
                                item.inStock ? "In Stock" : "Out of Stock"
                            }
                        </button>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Card;
