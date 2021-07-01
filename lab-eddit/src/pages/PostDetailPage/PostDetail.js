  
import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequesteData from '../../hooks/useRequestData'

const PostDetail = () => {
    useProtectedPage()
    const params = useParams().id
    const detail = useRequesteData({}, `${BASE_URL}/posts/${params}`).post
    console.log(detail)
    console.log(params)

    return (
        <div>
            <h1>{detail && detail.text}</h1>
        </div>
    )
}

export default PostDetail