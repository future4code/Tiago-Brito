  
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 25px;
`

export const AddPostButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`