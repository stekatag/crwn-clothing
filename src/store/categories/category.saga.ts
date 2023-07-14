import { takeLatest, put, all, call } from "typed-redux-saga";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesStartAsync() {
  try {
    const categoriesArr = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArr));
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesStartAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
