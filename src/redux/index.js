import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const reducers = {
  collapsibleItems: (state = initialState, action) => {
    const { type } = action;
    switch (type) {
      default:
        return state;
    }
  }
};

const slices = combineReducers({ ...reducers });

const composeEnhancers = compose;

const store = createStore(slices, composeEnhancers(applyMiddleware(thunk)));

export default store;
