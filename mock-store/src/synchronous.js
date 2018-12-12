const ADD_TODO = 'ADD_TODO'

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo,
    };
};

export {
    addTodo,
};