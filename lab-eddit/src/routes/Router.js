import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPost from '../pages/AddPostPage/AddPost'
import HomePage from '../pages/HomePage/HomePage'
import PostDetail from '../pages/PostDetailPage/PostDetail'
import SignIn from '../pages/SignInPage/SignIn'
import SignUp from '../pages/SignUpPage/SignUp'
import ErrorPage from '../pages/ErrorPage/ErrorMsg'

const Router = ({setLoginButtonText}) => {
    return(
        <Switch>
            <Route exact path='/'>
                <HomePage/>
            </Route>
            <Route exact path='/entrar'>
                <SignIn setLoginButtonText={setLoginButtonText}/>
            </Route>
            <Route exact path='/cadastrar'>
                <SignUp setLoginButtonText={setLoginButtonText}/>
            </Route>
            <Route exact path='/postar'>
                <AddPost/>
            </Route>
            <Route exact path='/detalhe/:id'>
                <PostDetail/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        
    )
}

export default Router