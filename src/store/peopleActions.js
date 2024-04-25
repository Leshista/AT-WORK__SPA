import { peopleActions } from './peopleSlice';

export const fetchPeopleData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            if (!response.ok) {
                throw json({ message: 'Response is not ok' }, { status: 500 });
            } else {
                const resData = await response.json();
                return resData;
            }
        };
        try {
            const peopleData = await fetchData();
            peopleData.map((person) => (person['status'] = 'active'));
            dispatch(peopleActions.setPeople(peopleData));
        } catch (error) {
            dispatch(peopleActions.setPeople([]));
        }
    };
};
