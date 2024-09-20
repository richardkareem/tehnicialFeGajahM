import React  from "react";
import {getDetailProduct} from "@/utils/fetchApi";
import {DetailProductContent} from "@/components/detailProduct";
import {usd} from "@/utils/helper";
import {ProductDetail} from "@/types/global.type";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Product",
    description: "List Products",
};

export default async function DetailProduct({ params }: { params: { slug: string } }) {
    const data : ProductDetail = await  getDetailProduct(params?.slug)
    return (
        <div>
            {data? (
                <DetailProductContent
                    galleryImages={data.images}
                    mainImage={data?.images[0]}
                    description={data.description}
                    rating={data.rating}
                    title={data.title}
                    price={usd(data.price)}
                />
                ):null }

        </div>
    );
}
