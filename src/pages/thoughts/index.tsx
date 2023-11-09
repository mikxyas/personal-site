import fs from "fs"
import Link from "next/link";
import matter from "gray-matter";

export const getServerSideProps = (async (context) => {
    const folder = './src/pages/thoughts'
    const files = fs.readdirSync(folder);
    // console.log(files)
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`./src/pages/thoughts/${filename}`, "utf-8")
        const matterResult = matter(fileContents);
        return {

            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: filename.replace(".md", "")
        }
    })
    return { props: { posts } }
})

// const getPostMetadata = () => {
//     const folder = './'
//     const files = fs.readdirSync(folder);
//     const markdownPosts = files.filter((file) => file.endsWith(".md"));
//     const slugs = markdownPosts.map((file) => file.replace(".md", ""))
//     return slugs;
// }

export default function index({ posts }) {
    // const postMetadata = getPostMetadata();
    // const postPreviews = postMetadata.map((slug) => (
    // <div>
    // <h2>{slug}</h2>
    // </div>
    // ))
    console.log(posts)
    console.log("hi")
    return (
        <div className=" flex flex-col items-center mt-10">

            <hr />
            {posts.map(post => (
                <div key={post.slug}>
                    <Link href={'thoughts/' + post.slug + '.md'}><p className=" text-lg">{post.title}</p></Link>
                    <hr />
                </div>
            ))}
        </div>
    )
}
