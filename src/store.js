// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
//the above line imports (export default venueSlice.reducer;
//which was exported by the sice
import avReducer from './avSlice';
import mealsReducer from './mealsSlice'

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});

// if we had a single reducer we would have passed it in the parameter of the configureStore() function or sometimes the createStore() function 
//but incase we had a lot of reducers or slices tor deal with we use simply create a reducer object to hold reference to all rerducers e.t.c