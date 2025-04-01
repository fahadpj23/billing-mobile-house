import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the user
interface UserState {
  loading: boolean;
  entities: any | null; // Type based on your API response
  error: string | null;
}

// Initial state
const initialState: UserState = {
  loading: false,
  entities: null,
  error: null,
};

// Async thunk to fetch attribute data
export const fetchAttribute = createAsyncThunk(
  "attribute/fetchAttribute",
  async () => {
    const response = await fetch(
      `http://localhost:9000/api/attributes/getAttribute`
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
          state.entities = action.payload;
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
