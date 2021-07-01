import React from 'react'
import { ErrContainer, ErrImg } from './styled'
import error from '../../assets/error.png'
import Typography from '@material-ui/core/Typography'

const ErrorMsg = () => {
    return (
        <ErrContainer>
            <ErrImg src={error}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>ERROR 404 - Page Not Found!!!</Typography>
        </ErrContainer>
    )
}

export default ErrorMsg