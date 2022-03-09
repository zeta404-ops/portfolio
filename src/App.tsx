import React, { useEffect, useState } from 'react'
import ErrorPage from '../src/components/extra/ErrorPage';
import MainPage from './components/pages/mainPage';
import cv from './components/pages/CV/cv';
import styles from './App.module.scss';
import Project from './components/pages/Projects/projects';

import {
  Switch,
  useHistory,
  Route,
  Link} from 'react-router-dom';
import Banner from './components/banner/banner';
import Contact from './components/pages/ContactForm/contact';
import Footer from './components/pages/Footer/footer';
import Policy from '../src/components/pages/Privacypolicy/privacypolicy'
import Terms from '../src/components/pages/Termsandconditions/termsandconditions'
import admin from '../src/components/pages/AdminP/admin'
import { logEvent } from 'firebase/analytics';
import FirebaseServices from './firebase/firebaseServices';

const App: React.FC = () => {

  const [contactformIsOpen, setContactformIsOpen] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    const pingAnalytics = () => {
      const analyticsInstance = FirebaseServices.getGAInstance();
      logEvent(analyticsInstance, "page_view", {
        page_path: window.location.pathname,
      });
    }

    console.log('Analytics initialized');
    pingAnalytics();

    return history.listen(location => {
      console.log('HISTORY UPDATE!');
      pingAnalytics();
    });
  }, [history]);

  return (

   <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"  
    />

    
    
    <div className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/cv">CV</Link>
      <Link to="/projects">PROJECTS</Link>
    </div>

    <Contact setModalIsOpen={setContactformIsOpen} openState={contactformIsOpen}/>

    

   <Switch>
     {/* Changing content comes here */}
     <Route exact path="/" render={() => <MainPage contactFormState={contactformIsOpen} setContactformState={setContactformIsOpen} />}/>
     {/* <Route exact path='/' component={MainPage} /> */}
     <Route exact path='/projects' component={Project}/>
     <Route exact path='/admin' component={admin}/>
     <Route exact path='/privacypolicy' component={Policy}/>
     <Route exact path='/terms' component={Terms}/>
     <Route exact path='/banner' component={Banner}/>
     <Route exact path='/contact' component={Contact}/>
     <Route exact path='/cv' component={cv} />
     <Route component={ErrorPage} />
   </Switch>

   {/* The footer and other components you want to display on all pages come here */}
   <Footer/>
 </>
  )
}

export default App