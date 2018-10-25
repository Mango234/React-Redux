import {combineReducers} from 'redux';
import TaskReducers from './Task';
import ActiveTask from './ActiveTask';

const AllReducers = combineReducers({
  Task: TaskReducers,
  ActiveTask: ActiveTask
});

export default AllReducers