import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieServices from "./movieServices";
const initialState = {
  genre: [],
  movieDetail: [],
  recommendations: {
    isLoading: false,
    data: [],
  },
  OfficialVideos: {
    isLoading: false,
    data: [],
  },
  crew_cast: {
    isLoading: false,
    data: [],
  },
  explore: {
    isLoading: false,
    data: [],
  },
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getMovieDetails = createAsyncThunk(
  "movie/details",
  async (id, thunkAPI) => {
    try {
      return await movieServices.getMD(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getreco = createAsyncThunk(
  "movie/reco",
  async (data, thunkAPI) => {
    try {
      return await movieServices.reco(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const OfficialVideos = createAsyncThunk(
  "movie/OfficialVideos",
  async (data, thunkAPI) => {
    try {
      return await movieServices.OfficialVideos(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const explore = createAsyncThunk(
  "movie/explore",
  async (data, thunkAPI) => {
    try {
      return await movieServices.explore(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const crew_cast = createAsyncThunk(
  "movie/crew_cast",
  async (data, thunkAPI) => {
    try {
      return await movieServices.crew_cast(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    getGenres: (state, action) => {
      state.genre = action.payload;
    },
    resetDetails: (state) => {
      state.movieDetail = [];
      state.recommendations.data=[];
      state.OfficialVideos.data=[];
      state.crew_cast.data=[];
      state.explore.data=[];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.isLoading = undefined;
        state.isError = false;
        state.isSuccess = true;
        state.movieDetail = action.payload;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getreco.pending, (state) => {
        state.recommendations.isLoading = true;
      })
      .addCase(getreco.fulfilled, (state, action) => {
        state.recommendations.isLoading = undefined;
        state.isError = false;
        state.isSuccess = true;
        state.recommendations.data = action.payload?.results;
      })
      .addCase(getreco.rejected, (state, action) => {
        state.recommendations.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(OfficialVideos.pending, (state) => {
        state.OfficialVideos.isLoading = true;
      })
      .addCase(OfficialVideos.fulfilled, (state, action) => {
        state.OfficialVideos.isLoading = undefined;
        state.isError = false;
        state.isSuccess = true;
        state.OfficialVideos.data = action.payload?.results;
      })
      .addCase(OfficialVideos.rejected, (state, action) => {
        state.OfficialVideos.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(crew_cast.pending, (state) => {
        state.crew_cast.isLoading = true;
      })
      .addCase(crew_cast.fulfilled, (state, action) => {
        state.crew_cast.isLoading = undefined;
        state.isError = false;
        state.isSuccess = true;
        state.crew_cast.data = action.payload;
      })
      .addCase(crew_cast.rejected, (state, action) => {
        state.crew_cast.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(explore.pending, (state) => {
        state.explore.isLoading = true;
        state.movieDetail = [];
      })
      .addCase(explore.fulfilled, (state, action) => {
        state.crew_cast.isLoading = undefined;
        state.isError = false;
        state.isSuccess = true;
        state.explore.data = action.payload;
        state.movieDetail = [];
        state.explore.isLoading = false;
      })
      .addCase(explore.rejected, (state, action) => {
        state.explore.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.movieDetail = [];
      });
  },
});
export const { getGenres, resetDetails } = movieSlice.actions;
export default movieSlice.reducer;
