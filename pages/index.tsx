import React from 'react'
import {GetServerSideProps} from 'next'
import PostCard from "../components/post-card";
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/router";

interface Data {
    website?: [title: string]
    podcasts?: [id: number, title: string, description: string, image_url: string, publication_date: string, blog_content: string]
    name: string
    pages: number
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // const res = await fetch(`http://localhost:4000/api/${process.env.station_id}/blog?page=${context.query.page}&items_per_page=10`)
    const res = await fetch(`https://api.podboxx.com/api/${process.env.station_id}/blog?page=${context.query.page}`)
    const data: Data = await res.json()
    return {
        props: {
            data,
        },
    }
}

const Blog: React.FC<{ data: Data }> = ({data}) => {
    const router = useRouter()
    const currentPage = parseInt(router.query.page as string)

    const handlePageClick = (data) => {
        router.push(`/?page=${data.selected + 1}`)
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 justify-items-center justify-center">
                {Object.keys(data.podcasts).map((value, index) =>
                    <div key={index} className='w-full'>
                        <PostCard data={{
                            id: data.podcasts[index]['id'],
                            title: data.podcasts[index]['title'],
                            description: data.podcasts[index]['description'],
                            blog_content: data.podcasts[index]['blogContent'],
                            // img_url: data.podcasts[index]['image_url'] || '/header_card.png',
                            img_url: 'https://podboxx-production.s3.amazonaws.com/jbjo25oynjl4egwpljo4u857g720',
                            publication_date: data.podcasts[index]['publication_date']
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
                    previousClassName={'dark:text-white material-icons-outlined pt-0.5 hover:text-red-500'}
                    nextClassName={'dark:text-white cursor-pointer select-none material-icons-outlined pt-0.5 hover:text-red-500'}
                    pageClassName={'dark:text-white cursor-pointer select-none text-lg sm:px-3 mx-2 hover:text-red-500'}
                    breakLinkClassName={'dark:text-white text-lg sm:px-3 mx-2 hover:text-red-500'}
                    disabledClassName={'material-icons-outlined'}
                    forcePage={currentPage - 1 || 0}
                />
            </div>
        </>
    )
}

export default Blog
//darkmode
//#8c0909 header
//#151a23 bg