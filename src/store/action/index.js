export const listData = (data)=>{
    return {
        type: "DATA_LIST",
        payload: data
    }
}

export const updateData = (id, num)=>{
    return{
        type: "UPDATE_DATA",
        payload: {
            id, num
        }
    }
}