import {GetServerSideProps} from 'next'
import React from "react";
import Layout from "../../components/layout/layout";
// import VerticalAd from "../../components/vertical-ad";
// import useSWR from 'swr'
import {useRouter} from "next/router";

// export function GetPost() {
//     const router = useRouter()
//     const {id} = router.query
//     const {data, error} = useSWR(`http://localhost:4000/api/${process.env.station_id}/podcast/` + id)
//     if (error) return <span className='text-2xl text-white'>failed to load</span>
//     if (!data) return <span className='text-2xl text-white'>loading...</span>
//     return data
// }

interface Data {
    title: string
    blog_content?: string

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:4000/api/6/podcast/' + context.query.id)
    const data: Data = await res.json()
    return {
        props: {
            data,
        },
    }
}

const Post: React.FC<{ data: Data }> = ({data}) => {
    const router = useRouter()
    return (
        <Layout>
            <div
                className="w-full sm:rounded-2xl shadow-lg flex flex-col sm:flex-col select-none gap-4"
                style={{backgroundColor: '#292d35'}}>
                <button
                    className="text-left p-5 select-none cursor-default w-28 font-bold text-gray-300 hover:text-red-500"
                    onClick={() => router.back()}>Go Back
                </button>
                <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto ">
                    <h1 className='text-center capitalize'>{data.title}</h1>
                    {/*<p dangerouslySetInnerHTML={{__html: data.blog_content}}/>*/}
                    <p>{data.blog_content}</p>
                </article>
                <br/>
                <iframe className='sm:m-4 sm:rounded-2xl h-72 sm:h-player ' height='235'
                        src="https://player.podboxx.com/33807"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </Layout>
    )
}


export default Post