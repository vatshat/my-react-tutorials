import {
    addTodo
} from '../src/synchronous';

// set up redux-mock-store
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

it('should add todo', () => {
    const store = mockStore({});

    store.dispatch(addTodo('Feed dog'));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
});