export const GET = ({request}) => {
    console.log(request)
    return new Response(JSON.stringify({x: 1, y: 2}))
}