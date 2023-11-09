import React from 'react'
import { useRouter } from 'next/router';
import fs from "fs"
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter"
import { NextApiHandler, NextApiRequest } from 'next';

export async function getServerSideProps({ req }: any) {
    const folder = './src/utils'
    const slug = req.url
    const result = slug.replace(/^\/thoughts\//, '');

    console.log(result)
    const file = `${folder}${'/' + result}`
    const Lcontent = fs.readFileSync(file, "utf-8")
    const content = matter(Lcontent).content

    return { props: { content } }
}

const Thought = ({ content }: any) => {
    const router = useRouter()
    const { slug } = router.query
    const markup = { __html: content }
    return (
        <div className='pt-4 p-4 flex justify-center'>
            <Markdown className="prose lg:prose-xl">{content}</Markdown>
        </div>
    )
}
export default Thought