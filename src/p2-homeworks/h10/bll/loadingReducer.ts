import {AppStoreType} from "./store";

const initState = {
    load:false
}

type loadingACType={
    type:'CHANGE-LOADING'

}

type loadingReducerType={
    load:boolean
}



export const loadingReducer = (state = initState, action: loadingACType): loadingReducerType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {

            return {...state,load:!state.load}
        }
        default: return state
    }
}

export const loadingAC = (): loadingACType => {
    return{type:'CHANGE-LOADING'} as const
} // fix any