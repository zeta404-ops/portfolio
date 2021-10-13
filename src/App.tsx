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
      
   {/* The navigation bar and other components you want to display on all pages come here */}
   <div className={styles.navbar}>
     <Link to='/'>Front page</Link>
     <Link to='example'>Look my example component</Link>
   </div>

   <Switch>
     {/* Changing content comes here */}
     <Route exact path='/' component={MainPage} />
     <Route exact path='/example' component={SomeExampleComponent}/>
     <Route component={ErrorPage} />


   </Switch>

   {/* The footer and other components you want to display on all pages come here */}

 </Router>
  )
}

export default App