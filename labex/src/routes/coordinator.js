export const goToListTripPage = (history) =>{
    history.push('/trips/list')
}

export const goToLoginPage = (history) =>{
    history.push('/login')
}

export const goToApplicationFormPage = (history) =>{
    history.push('/trips/appform')
}

export const goToHomePage = (history) =>{
    history.push('/')
}

export const goToAdminHomePage = (history) => {
    history.push('/admin/trips/list')
}

export const goToCreateTripPage = (history) =>{
    history.push('/admin/trips/create')
}

export const goToTripDetailPage = (history, id) =>{
    history.push(`/admin/trips/${id}`)
}