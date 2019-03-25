import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    itemEditing,
    search,
    sort
});

export default myReducer;