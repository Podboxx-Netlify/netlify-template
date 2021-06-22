import {GetServerSideProps} from 'next'
import React from "react";
import Layout from "../../components/layout/layout";
import VerticalAd from "../../components/vertical-ad";
import useSWR from 'swr'
import {useRouter} from "next/router";

export function GetPost() {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`http://localhost:4000/api/${process.env.station_id}/podcast/` + id)
    if (error) return <span className='text-2xl text-white'>failed to load</span>
    if (!data) return <span className='text-2xl text-white'>loading...</span>
    // console.log('data:', data)
    return data
}

interface Data {
    title: string
    blog_content?: string

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:4000/api/6/podcast/' + context.query.id)
    const data: Data = await res.json()
    // console.log(data)
    return {
        props: {
            data,
        },
    }
}

const Post: React.FC<{ data: Data }> = ({data}) => {
    // console.log(GetPost())
    return (
        <>
            <Layout>
                <div
                    className="w-full sm:rounded-2xl shadow-lg flex flex-col sm:flex-col select-none gap-4"
                    style={{backgroundColor: '#292d35'}}>
                    <button className="text-left p-5 select-none cursor-default w-28"><a href="../" className='font-bold text-gray-300 hover:text-red-500'>Go Back</a></button>
                    {/*<h1 className='text-center font-bold font text-3xl text-gray-300'>Fruit Name: {data.name}</h1>*/}
                    {/*<br/>*/}
                    {/*<h1 style={{textAlign: 'center'}}>Nutrition</h1>*/}
                    {/*<>{Object.keys(data.nutritions).map((value: string, key: number) =>*/}
                    {/*    <p key={key} style={{textAlign: 'center'}}>{value}: {data.nutritions[value]}</p>*/}
                    {/*)}*/}
                    {/*</>*/}
                    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto ">
                        <h1 className='text-center capitalize'>{data.title}</h1>
                        {/*<p dangerouslySetInnerHTML={{__html: data.blog_content}}/>*/}
                        <p>{data.blog_content}</p>
                        {/*<Image className=''/>*/}
                        {/*<p className=''>*/}
                        {/*    For years parents have espoused the health benefits of eating garlic bread with cheese to*/}
                        {/*    their*/}
                        {/*    children, with the food earning such an iconic status in our culture that kids will often*/}
                        {/*    dress*/}
                        {/*    up as warm, cheesy loaf for Halloween.*/}
                        {/*</p>*/}
                        {/*<p>*/}
                        {/*    But a recent study shows that the celebrated appetizer may be linked to a series of rabies*/}
                        {/*    cases*/}
                        {/*    springing up around the country.*/}
                        {/*</p>*/}
                    </article>
                    <br/>
                    <iframe className='sm:m-4 sm:rounded-2xl h-72 sm:h-player ' height='235' src="https://player.podboxx.com/33807"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </Layout>
        </>
    )
}


export default Post