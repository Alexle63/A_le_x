export default async function Page({ params }: { params: { slug: string } }) {
    // const posts = await fetch('projectJSONs/' + params.slug).then((res) => res.json())
    // return <div>{data.json()}</div>
    return <div>{params.slug}</ div>
}

// export async function generateStaticParams() {
//     const project = await fetch('projectJSONs/ReUnix.json').then((res) => res.json())
//     project.slug = {
//         slug: project.title
//     }

//     return project
// }