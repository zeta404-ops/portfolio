import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickCount';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount/>
    </div>
  )
}

export default App