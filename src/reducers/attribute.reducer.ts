import axios from "axios";
import {
  createAsyncThunk,
  createSlice,
  EntityState,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

const ApiUrl = `api/attributes`;

const initialState: any = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: "",
  updating: false,
  createSuccess: false,
  updateSuccess: false,
  deleteSuccess: false,
  createFailed: false,
  updateFailed: false,
  deleteFailed: false,
};

export const getEntities = createAsyncThunk(
  "attribute/fetch-entitiy",
  async () => {
    const requestUrl = ApiUrl;
    return axios.get(requestUrl);
  }
);

export const AttributeSlice = createSlice({
  name: "attribute",
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEntities.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload.data;
    });
  },
});

export const { reset } = AttributeSlice.actions;
export default AttributeSlice.reducer;
