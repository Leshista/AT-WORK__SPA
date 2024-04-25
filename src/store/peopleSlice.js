import { createSlice } from '@reduxjs/toolkit';

const initialPeopleState = { people: [] };

const peopleSlice = createSlice({
    name: 'people',
    initialState: initialPeopleState,
    reducers: {
        setPeople(state, action) {
            state.people = action.payload;
        },
        setStatusActive(state, action) {
            state.people[action.payload].status = 'active';
        },
        setStatusArchive(state, action) {
            state.people[action.payload].status = 'archive';
        },
        setStatusHidden(state, action) {
            state.people[action.payload].status = 'hidden';
        },
        setPersonInfo(state, action) {
            state.people[action.payload[0]] = action.payload[1];
        },
    },
});

export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;