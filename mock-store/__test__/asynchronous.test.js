import {
    fetchTodos,
    addTodos,
    setFetch,
} from '../src/asynchronous';

// set up redux-mock-store
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should dispatch correct actions when fetching todos', () => {
    const store = mockStore({});

    const fakeFetch = () => {
        return Promise.resolve({
            json: () => Promise.resolve({
                todos: [{
                    name: 'fluffykins'
                }]
            })
        })
    }
    
    return store.dispatch(fetchTodos(fakeFetch))
        .then(() => {
            expect(store.getActions()).toMatchSnapshot();
        });
});