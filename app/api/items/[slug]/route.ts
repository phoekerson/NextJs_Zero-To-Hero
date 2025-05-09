
type props = {
    params: {slug: string}
}

export async function GET(
    request: Request,
    {params}: props
){
    const slug = params.slug

    return new Response(`Item: ${slug}`)
}














// import {type NextRequest} from 'next/server'

// export function GET(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams
//     const query = searchParams.get('query')

//     return new Response(`Hello, ${query}!`)
// }