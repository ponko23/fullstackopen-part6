import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTE':
      return action.data

    case 'VOTE_ANECDOTE':
      return state.map(m => m.id === action.data.id
        ? action.data
        : m
      ).sort((a, b) => b.votes - a.votes)

    case 'NEW_ANECDOTE':
        return [...state, action.data]

    default:
      return state
  }
}

export const initialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdotes = await anecdoteService.createNew(asObject(content))
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdotes
    })
  }
}

export const addVotes = anecdote => {
  return async dispatch => {
    console.log(anecdote)
    const votedAnecdote =
      await anecdoteService.update(
        anecdote.id,
        { ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: votedAnecdote
    })
  }
}

export default reducer