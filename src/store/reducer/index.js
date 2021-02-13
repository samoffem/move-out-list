
function reducer(state={},  action){
    switch(action.type){
        case "DATA_LIST":
            return{
                data: action.payload
            }
        case "UPDATE_DATA":
            const{id, num} = action.payload
            const data = state.data.map(x=>x.id === id? ({...x, Room:num}):x)
            const updated_data = data.find(x=>x.id===id)
            const index = data.indexOf(updated_data)
            data.splice(index, 1)
            data.splice(0,0, updated_data)
            return{
                data
            }

        default: return state
    }
}

export default reducer