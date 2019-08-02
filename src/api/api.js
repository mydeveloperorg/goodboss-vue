import axios from 'axios';
// import Vue from "vue/types/index";

axios.defaults.baseURL = 'http://localhost/'
let base = '';
let urlBase = ''
// Vue.prototype.$http = axios

export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};

export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};
export const getEmployeeListPage = params => {
    return axios.post(`${urlBase}/employee`, {params: params});
};
export const getDeptListPage = params => {
    return axios.post(`${urlBase}/dept`, {params: params});
};

export const removeUser = params => {
    return axios.get(`${base}/user/remove`, {params: params});
};

export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, {params: params});
};

export const editUser = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};

export const addUser = params => {
    return axios.get(`${base}/user/add`, {params: params});
};