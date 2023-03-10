import { CATEGORIES_ACTION_TYPES } from "./categories.type";

import { createAction } from "../../utils/reducer.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
