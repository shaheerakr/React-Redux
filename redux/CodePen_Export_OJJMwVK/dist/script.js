const { createStore } = Redux;

const initState = {
  todos: [],
  posts: [] };


const myReducer = (state = initState, action) => {
  //console.log(action, state)
  if (action.type == 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo] };

  }
  if (action.type == 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post] };

  }
};

store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState());
  console.log("state updated");
});

const todoAction = {
  type: 'ADD_TODO',
  todo: 'buy milk' };

store.dispatch(todoAction);
store.dispatch({ type: 'ADD_TODO', todo: "get your cat" });
store.dispatch({ type: 'ADD_POST', post: 'tea with shaheer' });