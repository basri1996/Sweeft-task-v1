import { createSlice } from "@reduxjs/toolkit";


export interface ImageStateTypes {
    image: {
      imageArray: Object[];
      isLoading: boolean;
      searchQuery: string;
      cachedData: {
        [key:string]:Object[]
      }
    };
  }

const initialState: ImageStateTypes["image"]= {
  imageArray: [],
  isLoading: false,
  searchQuery: "",
  cachedData: {
  },
};

const imageSlice = createSlice({
  name: "image",
  initialState: initialState,
  reducers: {
    getImageData(state, action) {
      state.imageArray = action.payload;
    },
    addImageData(state, action) {
      state.imageArray = [...state.imageArray, ...action.payload];
    },
    setLoading(state) {
      state.isLoading = true;
    },
    unsetLoading(state) {
      state.isLoading = false;
    },
    setCachedData(state,action) {
    const name = action.payload.value;
    const data = action.payload.data;
    state.cachedData[name]=data;
    }
  },
});

export const {
  getImageData,
  addImageData,
  setLoading,
  unsetLoading,
  setCachedData
} = imageSlice.actions;

export default imageSlice.reducer;
