import axios from "axios";
import {Dispatch, SetStateAction} from "react";
import {notFound} from "next/navigation";

// setData: Dispatch<SetStateAction<PaginationResponse | undefined>>, query: string, params: any

export const fethAll = async (url:string,params:any) =>{

    try {
        const res = await  axios.get(url,{params});
        return res.data
    }catch (e: Error | unknown) {
    if(e instanceof Error){
        console.log(e.message)
        }
    }
}

export  const fetchDetailProd = async (url:string) =>{
    try {
        const res = await  axios.get(url);
        return res.data
    }catch (e: Error | unknown) {
        if(e instanceof Error){
            console.log(e.message)
        }
    }
}

export const getAllProductList = async (setData: Dispatch<SetStateAction<string[]>>) =>{
    try {
        const res = await  axios.get('https://dummyjson.com/products/category-list');
        if(res){
            setData(res.data)
        }
    }catch (e: Error | unknown) {
        if(e instanceof Error){
            console.log(e.message)
        }
    }
}

export const getDetailProduct = async (id:string) =>{
    try {
        const res = await  axios.get(`https://dummyjson.com/products/${id}`)
        if(res){
           return  res.data
        }
    }catch (e: Error | unknown) {
        if(e instanceof Error){

            console.log(e.message)
        }
        return notFound()
    }
}