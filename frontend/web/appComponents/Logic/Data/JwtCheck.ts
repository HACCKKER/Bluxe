export const JwtCheck = async ({token}) => {
    const response = await fetch(`${process.env.BACKEND_LINK}/auth/jwtcheck`, {
        headers: {
            'Authorization': `Bearer ${token}`  
        } 
    })
    const data = await response.json()
    return data
}