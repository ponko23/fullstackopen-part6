const reducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.data
      case 'CLEAR_NOTIFICATION':
          return ''
      default:
        return state
    }
}

export const setNotification = (message, timer) => {
    return async dispatch => {
        dispatch({
          type: 'SET_NOTIFICATION',
          data: message
        })
        setTimeout(() => {
            dispatch({
                type: 'CLEAR_NOTIFICATION',
            })
        }, timer * 1000)
      }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}
  export default reducer