import React from "react";
import Blog from "../pages";
import Image from 'next/image'

interface Post {
    title?: string
    publication_date?: string
    img_url?: string
}
const PostCard: React.FC<{ data: Post }> = ({data}) => {
// export default function PostCard(post: Post) {
    return (
        <>
            <div
                className="bg-white p-2 w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-56 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                {/*<div className="h-48 sm:h-48 sm:w-48 rounded-xl bg-gray-100 bg-center"*/}
                {/*     // style={{background: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)'}}/>*/}
                {/*    >*/}
                    <Image objectFit='cover' className='rounded-xl' alt='data.title' src={data.img_url} height='h-48 sm:h-48' width='sm:w-48'/>
                {/*</div>*/}
                {/*<div*/}
                {/*    style={{background: 'url("https://images.unsplash.com/photo-1622647604564-df77d10fbc9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=fit&cs=tinysrgb&w=1080&fit=max")'}}*/}
                {/*    className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"*/}
                {/*/>*/}
                <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-600">
                        {data.title}
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3 overflow-hidden overflow-ellipsis whitespace-normal max-h-24">
                        This is the desctiption for your card. This is really really long. This is used to describe the
                        content of the card. I hope you like the design I hope you like the design
                    </p>
                    {/*<p className="text-gray-500 text-sm sm:text-base line-clamp-3">*/}
                    {/*    {data.publication_date}*/}
                    {/*</p>*/}
                    <div className="flex gap-5 mt-auto">
                        <button
                            className='ml-auto flex items-center gap-3 sm:text-lg border border-red-900 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
                        >
                            <span>View episode</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostCard