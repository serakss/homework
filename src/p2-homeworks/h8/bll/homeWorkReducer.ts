import {UserType} from "../HW8";

type ActionType ={type: 'SORT', payload: 'up'|"down"}|{type: 'CHECK', payload: number}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT': {
          const newState = [...state].sort((a,b)=>{
              if(a.name > b.name) return 1
              else if(a.name < b.name) return -1
              else return  0
          })
            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'CHECK': {

            return state.filter(f=>f.age >= action.payload)
        }
        default: return state
    }
}