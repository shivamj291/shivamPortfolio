import store from "./Store"
export function NavStickyAction(value){
    return(
        store.dispatch({
            type:'STICKY',
            payload:value
        })
    )
}
export function ActionMode(value){
    return(
        store.dispatch({
            type:'MODE',
            payload:value
        })
    )
}

