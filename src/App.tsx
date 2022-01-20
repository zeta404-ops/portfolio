import React from 'react'
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';
import SomeExampleComponent from './components/example/someExampleComponent';
import styles from './App.module.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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

     <Link to='main'>JOIN</Link>
   </div>

   <Switch>
     {/* Changing content comes here */}
     <Route exact path='/' component={MainPage} />
     <Route exact path='/main' component={SomeExampleComponent}/>
     <Route component={ErrorPage} />


   </Switch>

   {/* The footer and other components you want to display on all pages come here */}

 </Router>
  )
}

export default App