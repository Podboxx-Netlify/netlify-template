import {GetServerSideProps} from 'next'
import React from "react";
import {Link} from "@material-ui/core";

interface Data {
    name: string
    nutritions: {}
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('https://www.fruityvice.com/api/fruit/' + context.query.id)
    const data: Data = await res.json()
    console.log(data)
    return {
        props: {
            data,
        },
    }
}

const Post: React.FC<{ data: Data }> = ({data}) => {
    return (
        <>
            <Link href="../">Go Back</Link>
            <h1 style={{textAlign: 'center'}}>Fruit Name: {data.name}</h1>
            <br/>
            <h1 style={{textAlign: 'center'}}>Nutrition</h1>
            <>{Object.keys(data.nutritions).map((value: string, key: number) =>
                <p key={key} style={{textAlign: 'center'}}>{value}: {data.nutritions[value]}</p>
            )}</>
        </>
    )
}


export default Post