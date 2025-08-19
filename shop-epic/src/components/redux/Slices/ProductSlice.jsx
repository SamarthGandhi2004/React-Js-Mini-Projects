import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts=createAsyncThunk(
"products/fetchProducts",async ()=>{
const response=await fetch("https://dummyjson.com/products?limit=200");
return response.json();
}
);


export const fetchProductById=createAsyncThunk(
    "products.fetchProductById",async(id)=>{
        const response= await fetch(`https://dummyjson.com/products/${id}`);
        return response.json();
    }
)


const ProductSlice=createSlice({
    name:"products",
    initialState:{
        items:[],
        productDetails:{},
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading=false;
        state.items=action.payload.products;
        })

        .addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })

        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })

        .addCase(fetchProductById.fulfilled,(state,action)=>{
            state.productDetails=action.payload;
            state.loading=false;

        })

           .addCase(fetchProductById.pending,(state)=>{
            
            state.loading=true;

        })
        

        
    }
})


export default ProductSlice.reducer;