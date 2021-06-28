import React from 'react'
import { CardActionArea, Typography, Button } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useHistory } from 'react-router'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequesteData from '../../hooks/useRequestData'
import { goToAddPostPage, goToPostDetailPage } from '../../routes/coordinator'
import { PostContainer, AddPostButton } from './styled'

const HomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const post = useRequesteData([], `${BASE_URL}/posts`).posts

    const onClickPost = (id) =>{
        goToPostDetailPage(history, id)
    }

    return (
        <PostContainer>
            {post && post.map((post) => {
        return (
        <CardActionArea
            variant='outlined'
        >
        <Button size='small'><ArrowUpwardIcon/></Button>
        <Button size='small'><ArrowDownwardIcon/></Button>
            <Typography
                variant='h6'
                align={'center'}
                color={'textPrimary'}
                onClick={() => {onClickPost(post.id)}
                }
            >
            {post.title.toUpperCase()}
            </Typography>
        </CardActionArea>
        )
    })}
            <AddPostButton
                color={'primary'}
                onClick={() => goToAddPostPage(history)}
                >
                    <PostAddIcon/>
                </AddPostButton>
        </PostContainer>
    )
}

export default HomePage 