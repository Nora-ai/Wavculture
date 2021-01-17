import React from 'react'
import './Main.css'
import Search from '../Search/Search'
//import Header from '../Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Resources from '../Resources/Resources'
import Faq from '../Faq/Faq'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import CreatePost from '../CreatePost/CreatePost'
import { Route } from 'react-router-dom'


export default function Main (props) {

    return (<>

        <Route path='/' exact render={() => (<>
            <div>
                <h1>Wavculture</h1>
            </div>
            <Search />
        </>)}>
        </Route>

        <Route path='/login' render={() => (<>
            <Login />
        </>)}>
        </Route>

         <Route path='/sign-up' render={() => (<>
            <Signup />
        </>)}>
        </Route>

        <Route path='/about-us' render={() => (
            <About/>
        )}>
        </Route>

        <Route path='/contact-us' render={() => (
            <Contact/>
        )}>
        </Route>

        <Route path='/resouces' render={() => (
            <Resources/>
        )}>
        </Route>

        <Route path='/faq' render={() => (
            <Faq/>
        )}>
        </Route>

        <Route path='/new-post' render={() => (
            <CreatePost/>
        )}>
        </Route>

        


    </>)

}