import { createStore } from "redux";

const initState = {
  breadcrumbs: ["Home"],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_BREADCRUMB":
      return {
        breadcrumbs: [...state.breadcrumbs, action.breadcrumb],
      };
    case "REMOVE_BREADCRUMB":
      const newBreadcrumbs = [...state.breadcrumbs];
      newBreadcrumbs.pop();
      return {
        breadcrumbs: newBreadcrumbs,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
