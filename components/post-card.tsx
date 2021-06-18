import React from "react";
import Blog from "../pages";

interface Post {
    title: string
    publication_date: string
    img_url: string
}
const PostCard: React.FC<{ data: Post }> = ({data}) => {
// export default function PostCard(post: Post) {
    return (
        <>
            <div
                className="bg-white p-2 w-80 max-w-xl sm:w-full sm:p-4 h-auto sm:h-56 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-3 select-none">
                <div className="h-48 sm:h-48 sm:w-48 rounded-xl bg-gray-100 bg-center bg-cover"
                     style={{background: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)'}}/>
                <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-600">
                        My first episode!
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                        June 18 2021
                    </p>
                    <div className="flex gap-3 mt-auto">
                        <button
                            className='ml-auto flex items-center gap-1 sm:text-lg border border-red-900 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
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