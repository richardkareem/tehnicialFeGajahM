import {Dispatch, SetStateAction} from "react";

type Props = {
    query: string
    setQuery: Dispatch<SetStateAction<string>>
}
export const SearchComponent = ({query, setQuery}: Props) =>{
    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) =>{
                    setQuery(e.target.value)
                }}
                placeholder="Cari produk atau kategori..."
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    )
}