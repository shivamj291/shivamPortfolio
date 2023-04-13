import store from "./Store"
export function NavStickyAction(value){
    return(
        store.dispatch({
            type:'STICKY',
            payload:value
        })
    )
}
export function ActionRef2(value){
    return(
        store.dispatch({
            type:'reff2',
            payload:value
        })
    )
}
export function ActionRef3(value){
    return(
        store.dispatch({
            type:'reff3',
            payload:value
        })
    )
}
