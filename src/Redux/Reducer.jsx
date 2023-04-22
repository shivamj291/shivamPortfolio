var reduce = {
    set:null,
    mode:true
}
export function Reducer(store= reduce , action){

        switch (action.type) {
            case 'STICKY':
              return ({...store,set:action.payload })
              case 'MODE':
                return({...store,mode:action.payload})
           
              return store
          }
    
}