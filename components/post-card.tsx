import React from "react";
import Image from 'next/image'

interface Post {
    title?: string
    publication_date?: string
    img_url?: string
}

const PostCard: React.FC<{ data: Post }> = ({data}) => {
    return (
        <>
            <div
                className=" p-2 w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-56 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none"
            style={{backgroundColor: '#292d35'}}>
                <Image objectFit='cover' className='rounded-xl' alt='data.title' src={data.img_url}
                       height='h-48 sm:h-48' width='sm:w-48'/>
                <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-300">
                        {data.title}
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base line-clamp-3 overflow-hidden overflow-ellipsis whitespace-normal max-h-24 prose">
                         Hello this is my podcast&apos;s description, I hope you enjoy it! Hello this is my podcast&apos;s description, I hope you enjoy it!
                    </p>
                    <div className="flex gap-5 mt-auto">
                        <button
                            className='ml-auto flex items-center gap-3 sm:text-lg border-2 border-red-900 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors focus:bg-gray-300 focus:outline-none focus-visible:border-gray-500'
                        >
                            <a href={`/post/${encodeURIComponent(data.title)}`} className='text-gray-300 hover:text-red-500'>View episode</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostCard