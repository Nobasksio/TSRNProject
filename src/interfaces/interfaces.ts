
export interface IPhone {
    id: string,
    phone: string,
}

export interface TextFieldProps {
    onChange(value: string): void,
    nameField: string,
    value: string | undefined,
    typeKeyPad?: KeyboardType,
}

export interface NavigationI {
    name: string,
    ruName: string,
    isShow: boolean
}
export interface BasketState {
    products: BasketItemI[],
    name: string,
    phone: string,
    address: string,
    hasRequiredFields: boolean
}

export interface BasketItemI {
    product: ProductItemI,
    num: number,
}

export interface CategoryItemI {
    id: number,
    name: string,
}

export interface ProductItemI {
    id: number,
    name: string,
    category: number,
    price: number,
    property: string,
}

export interface CatalogState {
    categories: CategoryItemI[],
    products: ProductItemI[]
    isFetch: boolean,
    fetchError: null | string
}

export interface HistoryState {
    orders: OrderHistoryItem[]
    isSync: boolean
}

export interface OrderHistoryItem {
    products: BasketItemI[],
    date: Date,
}
