import React, { useState } from 'react'
import ErrorPage from '../src/components/extra/ErrorPage';
import MainPage from './components/pages/mainPage';
import cv from './components/pages/CV/cv'
import styles from './App.module.scss'
import Project from './components/pages/Projects/projects'
import * as ReactBootStrap from "react-bootstrap"

import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Banner from './components/banner/banner';
import Contact from './components/pages/ContactForm/contact';
import Footer from './components/pages/Footer/footer';
import Policy from '../src/components/pages/Privacypolicy/privacypolicy'
import Terms from '../src/components/pages/Termsandconditions/termsandconditions'

const App: React.FC = () => {

  const [contactformIsOpen, setContactformIsOpen] = useState<boolean>(false);

  return (

   <Router basename='/portfolio'>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"  
    />

    
    
    <div className={styles.nav}>
      <ReactBootStrap.Navbar >
        <ReactBootStrap.Container >
          <ReactBootStrap.Nav > 
          <ReactBootStrap.Nav.Link href='/'>Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href='/cv'>CV</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href='/projects'>Projects</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>

    <Contact setModalIsOpen={setContactformIsOpen} openState={contactformIsOpen}/>

    

   <Switch>
     {/* Changing content comes here */}
     <Route exact path="/" render={() => <MainPage contactFormState={contactformIsOpen} setContactformState={setContactformIsOpen} />} />
     {/* <Route exact path='/' component={MainPage} /> */}
     <Route exact path='/projects' component={Project} />
     <Route exact path='/privacypolicy' component={Policy} />
     <Route exact path='/terms' component={Terms} />
     <Route exact path='/banner' component={Banner} />
     <Route exact path='/contact' component={Contact} />
     <Route exact path='/cv' component={cv} />
     <Route component={ErrorPage} />
   </Switch>

   {/* The footer and other components you want to display on all pages come here */}
   <Footer/>
 </Router>
  )
}

export default App