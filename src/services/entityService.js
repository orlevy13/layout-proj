import { httpService } from './httpService';
const BASE_URL = '/';//FILL THIS FIRST


function query(filter) {
    if (!filter) return httpService.get(BASE_URL);

    // const { q, showInStock, type, sortBy } = filter;
    // const qReq = `?name=${q}`;
    // const stockReq = showInStock ? `&inStock=true` : '';
    // const sortReq = sortBy ? `&sortBy=${sortBy}` : '';
    // const typeReq = (type === 'All') ? '' : `&type=${type}`;

    // return httpService.get(`${BASE_URL}${qReq}${stockReq}${typeReq}${sortReq}`);
}

function get(id) {
    return httpService.get(`${BASE_URL}/${id}`);
}

function remove(id) {
    return httpService.delete(`${BASE_URL}/${id}`);
}

function save(entity) {
    if (entity._id) return httpService.put(BASE_URL, entity);
    else return httpService.post(BASE_URL, entity);
}


export const entityService = {
    query,
    save,
    remove,
    get,
}