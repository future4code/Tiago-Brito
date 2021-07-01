import React from 'react'
import { StyledToolbar, LogoImg } from './styled'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

import { goToHomePage, goToSignInPage}  from './routes/coordinator'
import { useHistory } from 'react-router-dom'


const Header = ({loginButtonText, setLoginButtonText}) => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  const logOut = () =>{
    localStorage.removeItem('token')
  }

  const loginButtonAction = () => {
    if (token){
      logOut()
      setLoginButtonText('Login')
      goToSignInPage(history)
    } else {
      goToSignInPage(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick = {() => goToHomePage(history)}>
            <LogoImg alt='labeddit_logo' />
          </Button>
          <Button color="inherit" onClick={loginButtonAction}>{loginButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header