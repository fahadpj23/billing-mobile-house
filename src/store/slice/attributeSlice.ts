import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the user
interface UserState {
  loading: boolean;
  data: any | null; // Type based on your API response
  error: string | null;
}

// Initial state
const initialState: UserState = {
  loading: false,
  data: null,
  error: null,
};

// Async thunk to fetch user data
export const fetchAttribute = createAsyncThunk(
  "user/fetchAttribute",
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/attributes`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  }
);

// Create slice
const attributeSlice = createSlice({
  name: "attribute",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttribute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAttribute.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchAttribute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

// Export the reducer
export const userReducer = attributeSlice.reducer;
