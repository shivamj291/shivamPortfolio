var reduce = {
    set:null
}
export function Reducer(store= reduce , action){

        switch (action.type) {
            case 'STICKY':
              return ({...store,set:action.payload })
           
              return store
          }
    
}