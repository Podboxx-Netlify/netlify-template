import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {GetServerSideProps} from 'next'
import Layout from "../components/layout/layout";
import PostCard from "../components/post-card";
import VerticalAd from "../components/vertical-ad";
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/router";

interface Data {
    website?: [title: string]
    podcasts?: [id: number, title: string, description: string, image_url: string, publication_date: string, blog_content: string]
    name: string
    pages: number
}

interface Episode {
    id: number
    title: string
    description: string
    image_url: string
    publication_date: string
    blog_content: string
}

interface Website {
    title: string
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const res = await fetch('https://www.fruityvice.com/api/fruit/all')
//     const data: Data = await res.json()
//     return {
//         props: {
//             data,
//         },
//     }
// }

// export const getWebsiteProps: GetServerSideProps = async () => {
//     const res = await fetch(`http://localhost:4000/api/${process.env.station_id}/website`)
//     const website: Website = await res.json()
//     // console.log(website)
//     return {
//         props: {
//             website,
//         },
//     }
// }

export const getServerSideProps: GetServerSideProps = async (context) => {

    const res = await fetch(`http://localhost:4000/api/${process.env.station_id}/blog?page=${context.query.page}&items_per_page=10`)
    const data: Data = await res.json()
    // console.log(podcasts)
    console.log('context:', context.params)
    return {
        props: {
            data,
        },
    }
}

// Website title
// socials link
// Podcasts
//    Title - description - blogContent - Image

const Blog: React.FC<{ data: Data }> = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()
    console.log(data)
console.log(data.pages)
    // useEffect(() => {console.log(currentPage)},[currentPage])
    // const setPages = () => {
    //     // let i = 0
    //     let pages = []
    //     for (let i = 0; i < data.pages; i++){
    //         pages.push(<li key={i}>
    //             <button onClick={() => setCurrentPage(i)} key={i}
    //                     className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-red-500 text-white bg-red-500">
    //                 {i + 1}
    //             </button>
    //         </li>)
    //     }
    //     console.log(pages)
    //     return pages
    // }
    const handlePageClick = (data) => {
        router.push(`/?page=${data.selected +1}`)
    }

    console.log(router)

    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
                  rel="stylesheet"/>
            {/*<VerticalAd/>*/}
            <Layout>
                {/*<span>{website.title}</span>*/}
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 justify-items-center justify-center">
                    {Object.keys(data.podcasts).map((value,index) =>
                        <div key={index} className='w-full'>
                            <PostCard data={{
                                id: data.podcasts[index]['id'],
                                title: data.podcasts[index]['title'],
                                description: data.podcasts[index]['description'],
                                blog_content: data.podcasts[index]['blogContent'],
                                img_url: data.podcasts[index]['image_url'] || 'https://podboxx-production.s3.amazonaws.com/images/header_card.png',
                                publication_date: data.podcasts[index]['publication_date'],
                                currentPage: router.query.page
                            }}/>
                        </div>
                    )}
                </div>

                <div className="py-2">
                    <ReactPaginate
                        pageCount={data.pages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={'flex mx-auto mt-10 justify-center'}
                        activePageClassName={'text-red-900'}
                        nextLabel='navigate_next'
                        previousLabel='navigate_before'
                        activeLinkClassName={'text-bold text-2xl text-red-500'}
                        previousClassName={'text-white material-icons-outlined pt-0.5 hover:text-red-500'}
                        nextClassName={'text-white material-icons-outlined pt-0.5 hover:text-red-500'}
                        pageClassName={'text-white text-lg px-3 mx-2 hover:text-red-500'}
                        breakLinkClassName={'text-white text-lg px-3 mx-2 hover:text-red-500'}
                        disabledClassName={'material-icons-outlined '}
                    />
                </div>
            </Layout>
        </>
    )
}

export default Blog
//darkmode
//#8c0909 header
//#151a23 bg