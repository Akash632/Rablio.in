export function addData(data){
    return{type:"add", payload:data};
}

//action for setting data to store

export function deleteData(id){
    return{type:"delete",payload:id};
}

//action for seleting data

export function deleteMultiple(array){
    return{type:'deleteMultiple',payload:array};
}

//action for deleting multiple data