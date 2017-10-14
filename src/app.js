import React from 'react'
import ReactDOM from 'react-dom'
import { Users } from './components/container'

const App = () =>
  <div>
    <Users />
  </div>

ReactDOM.render(<App />, document.getElementById('root'))
