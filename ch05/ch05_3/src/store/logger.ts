import { Action, Dispatch } from "redux";

export default function logger<S = any>({getState}: {getState: () => S}) {
  return (next: Dispatch) => (action: Action) => {
    console.log('state before next', getState())
    console.log('action', action)
    const returnedAction = next(action)
    console.log('start after next', getState())
    return returnedAction
  }
}