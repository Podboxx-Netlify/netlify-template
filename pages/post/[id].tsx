import {GetServerSideProps} from 'next'
import React from "react";
import Layout from "../../components/layout/layout";
import VerticalAd from "../../components/vertical-ad";

interface Data {
    name: string
    nutritions: {}
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('https://www.fruityvice.com/api/fruit/' + context.query.id)
    const data: Data = await res.json()
    // console.log(data)
    return {
        props: {
            data,
        },
    }
}

const Post: React.FC<{ data: Data }> = ({data}) => {
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
                        <h1 className='text-center '>Fruit Name: {data.name}</h1>
                        {/*<Image className=''/>*/}
                        <p className=''>
                            For years parents have espoused the health benefits of eating garlic bread with cheese to
                            their
                            children, with the food earning such an iconic status in our culture that kids will often
                            dress
                            up as warm, cheesy loaf for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated appetizer may be linked to a series of rabies
                            cases
                            springing up around the country.
                        </p>
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