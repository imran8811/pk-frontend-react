const baseRoute = 'http://localhost:8000/api';
// const baseRoute = 'https://www.pkapparel.com/pknew/api';

export const basePath = 'http://localhost:8000';
export const ADMIN_LOGIN = `${baseRoute}/admin/login`;
export const ADD_PRODUCT = `${baseRoute}/admin/product/new`;
export const GET_PRODUCTS = `${baseRoute}/admin/products`;
export const DELETE_PRODUCT = `${baseRoute}/admin/product`;
export const UPDATE_PRODUCT = `${baseRoute}/admin/product`;
export const SEARCH_PRODUCTS = `${baseRoute}/products/search`;
export const IMAGE_UPLOAD = `${baseRoute}/admin/product/image-upload`;
export const GET_PRODUCT_DETAILS = `${baseRoute}/product`;
export const CREATE_ADMIN_USER = `${baseRoute}/admin/create`;
export const ADMIN_LOGOUT = `${baseRoute}/admin/logout`;
export const GET_PRODUCTS_LISTING = `${baseRoute}/product-listing`;

//internal routes
export const PRODUCT_DETAILS = '/wholesale-shop/prodict-details'
export const WHOLESALE_SHOP = '/wholesale-shop'