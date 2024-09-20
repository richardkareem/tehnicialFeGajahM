import ReactPaginate from "react-paginate";
import {Dispatch, SetStateAction, useState} from "react";
import {ParamsUrl} from "@/types/global.type";

type Props = {
    itemsPerPage: number;
    items: number[];
    setParams: Dispatch<SetStateAction<ParamsUrl>>
    content: React.ReactNode
};

export const PaginatedItems = ({ itemsPerPage, items, setParams, content }: Props) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setParams((prev) =>{
            return{
                ...prev,
                skip: newOffset * 10
            }
        })
        setItemOffset(newOffset);
    };

    return (
        <div className="flex items-center justify-center">
            {content}
            <ReactPaginate
                breakLabel=""
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="flex space-x-2"
                pageClassName="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-200"
                pageLinkClassName="block text-center w-full h-full"
                previousClassName="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-200"
                nextClassName="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-200"
                breakClassName="flex items-center justify-center w-8 h-8 text-gray-700"
                activeClassName="bg-blue-500 text-white"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    );
};
