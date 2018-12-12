// asynchronous actions
const ADD_TODOS = 'ADD_TODOS';
const SET_FETCH = 'SET_FETCH';
const FETCH_TODOS = 'FETCH_TODOS';

// import fetch from './fetch';

const addTodos = (todos) => {
    return {
        type: ADD_TODOS,
        todos,
    };
};

const setFetch = (isFetching) => {
    return {
        type: SET_FETCH,
        isFetching,
    };
};

const fetchTodos = (fetch) => {
    return (dispatch) => {
        dispatch(setFetch(true));

        return fetch('http://httpbin.org/get')
            .then((data) => {
                dispatch(addTodos(data));
                dispatch(setFetch(false));
            })
            .catch((e) => {
                console.error(e.stack || e);
                dispatch(setFetch(false));
            });
    };
};

export {
    fetchTodos,
    addTodos,
    setFetch,
};