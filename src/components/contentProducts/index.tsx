'use client'
import {CardProduct} from "@/components/CardProduct";
import {usd} from "@/utils/helper";
import {PaginationResponse, ParamsUrl} from "@/types/global.type";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {SortComponent} from "@/components/sortComponent";
import {SearchComponent} from "@/components/searchComponent";
import {fethAll} from "@/utils/fetchApi";
import {useDebounce} from "use-debounce";
import {Sidebar} from "@/components/sidebar";
import {PaginatedItems} from "@/components/Paginated";


const fetch = async (setData: Dispatch<SetStateAction<PaginationResponse | undefined>>, query: string, params: any) =>{
    try {
        //
        const res = await fethAll(query,params);
        if(res){
            setData(res)
        }
    }catch (e: Error | unknown) {
        if(e instanceof Error){
            alert(e.message)
        }
    }
}

export  const ContentProducts = () =>{
    const [res, setRes] = useState<PaginationResponse | undefined>()
    const [query, setQuery] = useState('');
    const [value] = useDebounce(query, 1000);

    const [params, setParams] = useState<ParamsUrl>({
        sortBy:"",
        order: "",
        skip:10,
        limit:10,
        select: ["title", "price", "description", "images"],

    })
    const [categories, setCategories] = useState('')
    useEffect(() =>{
        fetch(setRes, value ?
            `https://dummyjson.com/products/search?q=${value}`
            :
            categories ? `https://dummyjson.com/products/category/${categories}`
                : 'https://dummyjson.com/products',
            params
        )
    },[value, params.sortBy, params.order, categories, params.skip])
    const page = params.skip / 10 == 0 ? 1 : params.skip / 10;
    const totalPages = Math.ceil(res?.total || 0 / res?.limit || 0);
    const array = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <div className={'flex flex-row justify-start'}>
                <Sidebar setCategory={setCategories} setParams={setParams} />
                <div>
                    <div className={'flex items-end justify-end px-12 mt-8'}>
                        <SearchComponent query={query} setQuery={setQuery}/>
                        <SortComponent setParams={setParams}/>
                    </div>
                    <div className={'grid xl:grid-cols-4 px-8 md:grid-cols-3  grid-cols-2  py-4'}>
                        {res?.products.length ? res.products.map((product) => {
                            return (
                                <CardProduct
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    description={product.description}
                                    price={usd(product.price)}
                                    images={product.images}/>)
                        }) : null}
                    </div>
                </div>

            </div>


        </>

    )
}