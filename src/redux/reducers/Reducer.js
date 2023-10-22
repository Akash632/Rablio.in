export function dataReducer (state={data:[]},action){
    switch(action.type){
        case "add":
            return {data:action.payload};
        case "delete":
            let newData = [...state.data];
            newData.splice(action.payload,1);

            //action for single delete
            
            return {data:newData};
        case "deleteMultiple":
            let myArray = [...state.data];
            const removeArray = action.payload;
            for(let i=removeArray.length-1; i>=0; i--){
                myArray.splice(removeArray[i],1);
            }

            //code for multiple deletes from an array

            return {data:myArray};
        default:
            return state;
    }
}

//reducer to handle the actions.