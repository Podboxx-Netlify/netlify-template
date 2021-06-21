import React from 'react'
import Image from 'next/image'
import {GetServerSideProps} from 'next'
import Layout from "../components/layout/layout";
import PostCard from "../components/post-card";
import VerticalAd from "../components/vertical-ad";

interface Data {
    name: string
    family: string
    genus: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('https://www.fruityvice.com/api/fruit/all')
    const data: Data = await res.json()
    return {
        props: {
            data,
        },
    }
}

const Blog: React.FC<{ data: Data[] }> = ({data}) => {
    console.log(data)
    return (
        <>
            {/*<VerticalAd/>*/}
            <Layout>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 justify-items-center justify-center">
                    {data.map((episode, index) =>
                        // console.log(episode, index)
                        // title={episode.name} img_url={'https://source.unsplash.com/random'} publication_date={'June 18 2021'}
                        <div key={index}>
                            <PostCard data={{
                                title: episode.name,
                                img_url: `https://source.unsplash.com/random?${episode.name}`,
                                publication_date: 'June 18 2021'
                            }}/>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    )
}

export default Blog
//darkmode
//#8c0909 header
//#151a23 bg