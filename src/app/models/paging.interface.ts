export interface Paging<T> {
    limit: number;
    skip: number;
    total: number;
    products: T[];
}