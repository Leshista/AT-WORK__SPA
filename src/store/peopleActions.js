import { peopleActions } from './peopleSlice';

export const fetchPeopleData = () => {
    // Redux reducer thunk, ответственный за fetch данных с сервера
    // и выдающий ошибки, если данных не найдено
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
            // Однако что-то нам всё же нужно отображать, так что в случае
            // ошибки просто выдаём пустой массив
            dispatch(peopleActions.setPeople([]));
        }
    };
};
