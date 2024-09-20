'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string,
    description: string,
    price: string,
    images:string[],
    id: number
}
export const CardProduct = ({ title, description, price, images, id }: Props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Link href={`/product/${id}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
            <Slider {...settings}>
                {images.map((image:string, index:number) => (
                    <div key={index}>
                        <Image quality={50} width={150} height={150} className="w-full h-48 object-cover overflow-hidden" src={image} alt={`Image ${index + 1}`}/>
                    </div>
                ))}
            </Slider>
            <div className="p-4 mt-2">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <span className="text-gray-900 font-semibold">{price}</span>
            </div>
        </Link>
    );
};
