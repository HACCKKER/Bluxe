export const JwtCheck = async ({token}) => {
    const response = await fetch("http://localhost:4000/auth/jwtcheck", {
        headers: {
            'Authorization': `Bearer token`  
        } 
    })
    const data = await response.json()
    return data
}