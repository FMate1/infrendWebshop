export interface ProductDTO {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    brand: string;
    uploader: null | UserDTO;
}

export interface UserDTO {
    id: number;
    firstName: string;
    lastName: string;
}
