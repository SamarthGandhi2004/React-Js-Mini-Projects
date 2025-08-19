
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchCategories=createAsyncThunk(
    "categories/fetchCategories",
    async()=>{
        const response=await fetch("https://dummyjson.com/products/categories");
        return response.json();
    }
);

export const fetchCategoryBySlug=createAsyncThunk(
    "categories/fetchCategoryBySlug",
    async(slug)=>{
        const response=await fetch(`https://dummyjson.com/products/category/${slug}`);
        return response.json();
    }
)

const categoriesSlice=createSlice({
    name:"categories",
    initialState:{
        list:[],
        categoryProduct:{},
        error:null,
        status:"idle",

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.list=action.payload;
            state.status="succeeded";
        })

        .addCase(fetchCategories.pending,(state)=>{
            state.status="loading";
        })

        .addCase(fetchCategories.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })

        .addCase(fetchCategoryBySlug.fulfilled,(state,action)=>{
            state.categoryProduct=action.payload.products;
            state.status="succeeded";
        })
    }
})


export default categoriesSlice.reducer;