export interface IServicesResp extends Array<IServicesResp> {
    id: number,
    subcategory: ISubcategory;
    price: string
}

interface ISubcategory {
    id: number,
    name: string,
    category: ICategory 
}

interface ICategory {
    id: number
    name: string
}

