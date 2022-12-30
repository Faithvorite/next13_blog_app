import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import  PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
const query = groq`
*[_type=='post'] {
    ..., 
    author->,
    categories[]->
} | order(_createdAt desc)
`
export default async function HomePage() {

    if(!previewData()) {
        return (
        <PreviewSuspense fallback={(
            <div role="status">
                <p className="text-center pt-20 text-lg animate-pulse text-[#F7AB0A">
                    Loading ...
                    </p>
            </div>
        )}
        >
            <PreviewBlogList query={query}/>
        </PreviewSuspense>
        )
    }
    const posts = await client.fetch(query);
    return (
   <BlogList posts={posts}/>
    )
}