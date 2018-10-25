export default function (state={}, action) {
    switch (action.type) {
      case "TASK_SELECTED": 
        return action.payload;
        break;
      default: 
        return state;
    }
}