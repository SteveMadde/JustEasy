import React from "react";


export const set_Collapsed = 'setCollapsed'

export type StateType = {
    collapsed: boolean
}

export type ActionType = {
    type: string
}

export let reducerUnAccrodion = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case set_Collapsed:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Fuck u')
    }
}