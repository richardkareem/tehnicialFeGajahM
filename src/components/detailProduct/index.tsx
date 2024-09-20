import Image from "next/image";

interface ProductDetailProps {
    title: string;
    description: string;
    rating: number;
    mainImage: string;
    galleryImages: string[];
    price: string
}
export const DetailProductContent = ({
                                         title,
                                         description,
                                         rating,
                                         mainImage,
                                         galleryImages,
    price
                                         }:ProductDetailProps) =>{
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Main Image */}
            <div className="relative">
                <Image
                    priority
                    quality={20}
                    width={200}
                    height={150}
                    src={mainImage}
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow">
                    <span className="text-yellow-500">{`★ ${rating.toFixed(1)}`}</span>
                </div>
            </div>

            {/* Title, Price, and Description */}
            <h2 className="mt-4 text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-xl text-gray-800 font-semibold">{price}</p> {/* Menampilkan harga */}
            <p className="mt-2 text-gray-600">{description}</p>

            {/* Gallery */}
            <h3 className="mt-6 text-lg font-semibold">Gallery</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
                {galleryImages.map((image, index) => (
                    <Image
                        priority
                        quality={20}
                        width={75}
                        height={75}
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    )
}