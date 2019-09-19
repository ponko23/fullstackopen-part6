import React, { useEffect } from 'react'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import { connect }  from 'react-redux'
import { initialAnecdotes } from './reducers/anecdoteReducer'

const App = ({initialAnecdotes}) => { 

  useEffect(() => {
      initialAnecdotes()
  },[])

  return (
    <>
      <h1>Programming anecdotes</h1>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </>
  )
}

const mapDispatchToProps = {
  initialAnecdotes
}

export default connect(
  null,
  mapDispatchToProps
)(App)