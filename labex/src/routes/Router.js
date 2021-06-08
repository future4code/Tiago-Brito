import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import HomePage from '../pages/HomePage'
import ListTripPage from '../pages/ListTripPage'
import LoginPage from '../pages/LoginPage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDeatilPage from '../pages/TripDetailPage'
import ErrorPage from '../pages/ErrorPage'

function Router () {
    return (
    
        <BrowserRouter>
            <Switch>

                <Route exact path='/'>
                    <HomePage/>
                </Route>

                <Route exact path='/trips/list'>
                    <ListTripPage/>
                </Route>

                <Route exact path='/trips/appform'>
                    <ApplicationFormPage/>
                </Route>

                <Route exact path='/login'>
                    <LoginPage/>
                </Route>

                <Route exact path='/admin/trips/list'>
                    <AdminHomePage/>
                </Route>

                <Route exact path='/admin/trips/create'>
                    <CreateTripPage/>
                </Route>

                <Route exact path='/admin/trips/:id'>
                    <TripDeatilPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    
    );
}

export default Router;