import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import ScreenUsedTime from './ScreenUsedTime'
import MouseUsedTime from './MouseUsedTime'
import KeyBoardUsedTime from './KeyBoardUsedTime'
import Todolist from './Todolist'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main style={{width: "calc(100% - 48px)"}}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/screen-used-time' component={ScreenUsedTime} />
      <Route path='/mouse-used-time' component={MouseUsedTime}></Route>
      <Route path='/keyboard-used-time' component={KeyBoardUsedTime}></Route>
      <Route path='/todo-list' component={Todolist}></Route>
    </Switch>
  </main>
)

export default Main
