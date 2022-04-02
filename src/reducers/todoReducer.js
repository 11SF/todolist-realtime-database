const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.title,
          date: action.date,
          completed: false,
        },
      ];
    case "COMPLETE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
};
export default todos;
