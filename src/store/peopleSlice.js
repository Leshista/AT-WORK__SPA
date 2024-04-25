import { createSlice } from '@reduxjs/toolkit';

const initialPeopleState = { people: [] };
// Reducer отвечающий за первоначальную загрузку людей,
// а также за изменение их состояния
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
    },
});

export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;
