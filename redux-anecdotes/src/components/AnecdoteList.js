import React from 'react'
import { connect }  from 'react-redux'
import Anecdote from './Anecdote'
import { addVotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotesToShow, addVotes, setNotification }) => {
    return (
        <div>
            {anecdotesToShow.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        addVotes(anecdote)
                        setNotification(`you voted '${anecdote.content}'`, 5)
                    } }
                />
            )}
        </div>
    )
}

const anecdotesToShow = ({anecdotes, filter}) => {
    return filter !== ''
    ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    : anecdotes
}

const mapStateToProps = (state) => {
    return {
        anecdotesToShow: anecdotesToShow(state)
    }
}

const mapDispatchToProps = {
    addVotes,
    setNotification
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)