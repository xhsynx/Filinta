import combineReducers from 'react-combine-reducers';
import { initialPosts } from '../states/initialStates';
import { postReducer } from './postReducer/reducer/postReducer';

export const [combinedReducer, combinedState] = combineReducers({
  posts: [postReducer, initialPosts],
});

