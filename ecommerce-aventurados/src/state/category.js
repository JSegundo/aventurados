import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk("GET_ALL_CATEGORIES", () => {
  return axios
    .get(`http://localhost:3001/api/categories`)
    .then((res) => res.data);
});

export const deleteCategory = createAsyncThunk(
  "DELETE_CATEGORY",
  (categoryId, thunkAPI) => {
    const { categorylist } = thunkAPI.getState();
    axios
      .delete(`http://localhost:3001/api/categories/${categoryId}`)
      .then((res) => res.data);
    const newList = categorylist.filter((category) => {
      return category.id !== categoryId;
    });
    return newList;
  }
);



export const editCategory = createAsyncThunk(
  "EDIT_CATEGORY",
  ({ id, edition }) => {
    return axios
      .put(`http://localhost:3001/api/categories/edit/${id}`, edition)
      .then((res) => res.data);
  }
);

//modificar para agregar
export const addCategory = createAsyncThunk("CREATE_CATEGORY", (newCategory) => {
  return axios.post(`http://localhost:3001/api/category`, newCategory);
});



const initialState = [];

const categoriesReducer = createReducer(initialState, {
  [getAllCategories.fulfilled]: (state, action) => action.payload,
  [deleteCategory.fulfilled]: (state, action) => action.payload,
  [addCategory.fulfilled]:(state, action) => action.payload,
  [editCategory.fulfilled]:(state, action) => action.payload,
});

export default categoriesReducer;