import { useEffect, useState } from "react";
import FilterBar from "../Components/products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/home/ProductCard";

const Product = () => {

    const [products, setProducts] = useState([]);
    const [loading,SetLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("asc");
    const [category, setCategory] = useState("asc");
    console.log(brand,category,sort,search)

    useEffect(()=>{
    SetLoading(true);
    const fetch = async()=>{
        axios.get(`http://localhost:4000/allProduct`).then(res=>{
        setProducts(res.data);
        SetLoading(false)
       })
    }
     
    fetch()


    },[]);

    const handleSearch =(e)=>{
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = "";
    }

    const handleReset =()=>{
           setSearch("");
           setBrand("");
           setCategory("");
           setSort("asc");
           window.location.reload();
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-center pt-28 font-semibold text-2xl">All Product</h1>
            <div className="lg:flex w-full justify-between items-center">
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>

            {/* content */}

            <div className="grid grid-cols-12 mt-6 gap-2">
                <div className="col-span-2"><FilterBar setBrand={setBrand} setCategory={setCategory} handleReset={handleReset}></FilterBar></div>

                {/* ///////// */}
                <div className="col-span-10 ">
                    {
                        loading?(
                            <Loading></Loading>
                        ):(<>{
                            products.length === 0 ? 
                                (<div className="flex items-center w-full h-full justify-center"><h1 className="text-3xl font-bold">No Product found</h1></div>)
                                :(
                                <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-2 ">{
                                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                                }</div>)
                        }</>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;