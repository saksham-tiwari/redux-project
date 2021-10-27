import { createSlice } from "@reduxjs/toolkit";

let lastId=0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers:{
        bugAdded: (bugs,action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs,action) =>{
            const i = bugs.findIndex(bug=> bug.id=== action.payload.id);
            bugs[i].resolved=true;
        }
    }
});

console.log(slice)



export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;
