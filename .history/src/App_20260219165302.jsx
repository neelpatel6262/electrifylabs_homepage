import React from 'react' 
import Card from './card'



function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>This is a simple React application.</p>
        <button className='btn'>Click me</button>
      </header>
      <Card />
    </div>

  )
}

export default App