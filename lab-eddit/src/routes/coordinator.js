  
export const goToHomePage = (history) =>{
    history.push('/')
}

export const goToSignInPage = (history) =>{
    history.push('/entrar')
}

export const goToSignUpPage = (history) =>{
    history.push('/cadastrar')
}

export const goToAddPostPage = (history) =>{
    history.push('/postar')
}

export const goToPostDetailPage = (history, id) =>{
    history.push(`/detalhe/${id}`)
}
