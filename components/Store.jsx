import React from 'react'

export const CTX = React.createContext();

const initState = {
    general: [
        { from: 'user1', msg: 'hello' },
        { from: 'user2', msg: 'u stink' },
        { from: 'user3', msg: 'some other words' }
    ],
    channel2: [
        { from: 'user1', msg: 'hello' }
    ]
}
const reducer = (state, action) => {
    const { from, msg, channel } = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [channel]: [
                    ...state[channel],
                    { from, msg }
                ]
            }
        default:
            return state
    }
}

export const Store = (props) => {

    const reducerHook = React.useReducer(reducer, initState)

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}
