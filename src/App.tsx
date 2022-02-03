import React from 'react'
import ErrorPage from './components/ErrorPage';
import MainPage from './components/example/mainPage';
import cv from './components/example/CV/cv'
import styles from './App.module.scss'
import Project from './components/example/Projects/projects'
import About from './components/example/AboutMe/about';
import * as ReactBootStrap from "react-bootstrap"

import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Banner from './components/banner/banner';


const App: React.FC = () => {

  return (

   <Router basename='/portfolio'>
         <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"

  
/>
   {/* The navigation bar and other components you want to display on all pages come here */}
   <div className={styles.navbar}>

   </div>

   <div className={styles.nav}>
        <ReactBootStrap.Navbar variant="light">
          <ReactBootStrap.Container>
            <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href='/'>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='/cv'>CV</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='/projects'>Projects</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>



   <Switch>
     {/* Changing content comes here */}
     <Route exact path='/' component={MainPage} />
     <Route exact path='/aboutme' component={About} />
     <Route exact path='/projects' component={Project} />
     <Route exact path='/banner' component={Banner} />
     <Route exact path='/cv' component={cv} />
     <Route component={ErrorPage} />



   </Switch>

   {/* The footer and other components you want to display on all pages come here */}

 </Router>
  )
}

export default App