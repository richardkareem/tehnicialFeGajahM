export type Product = {
    id: number
    title: string
    price: number
    description: string
    images: string[]
}

export type PaginationResponse = {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export type ParamsUrl = {
    sortBy: string
    order: string
    limit: number
    skip:number
    select: string[]
}

export interface ProductDetail {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    thumbnail: string
    images: string[]
}

export interface Dimensions {
    width: number
    height: number
    depth: number
}

export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export interface Meta {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}