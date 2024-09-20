'use client'
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {getAllProductList} from "@/utils/fetchApi";
import {ParamsUrl} from "@/types/global.type";
type Props = {
    setCategory: Dispatch<SetStateAction<string>>
    setParams:Dispatch<SetStateAction<ParamsUrl>>
}
export const Sidebar = ({setCategory,setParams}: Props) =>{
    const [listCategory, setListCategory] = useState<string[]>([]);
    useEffect(()=>{
        getAllProductList(setListCategory)
    },[])
    const onClick = (value:string) =>{
        setCategory(value)
        setParams(prevState => {
            return{
                ...prevState,
                order:'',
                sortBy:'',
                skip:0,
            }
        })
    }
    return (
        <aside className="w-64 bg-white shadow-lg p-6 rounded-lg min-h-svh">
            <h2 className="text-2xl font-semibold mb-6">Kategori</h2>
            <ul>
                {listCategory.map((kategori, index) => (
                    <li key={index} className="mb-4">
                        <a
                            onClick={()=>{onClick(kategori)}}
                            className="text-gray-700 hover:text-blue-500 transition duration-200 ease-in-out rounded-md p-2 hover:bg-blue-100 hover:cursor-pointer block"
                        >
                            {kategori}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}