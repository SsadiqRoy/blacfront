import { baseUrl } from '../utils/utils.js';
import axios from 'axios';

export async function get(url) {
  try {
    const u = `${baseUrl}${url}`;
    const res = await axios({
      method: 'get',
      url: u,
      withCredentials: true,
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}

//
export async function getfull(url) {
  try {
    const u = `${baseUrl}${url}`;
    const res = await axios({
      method: 'get',
      url: u,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}

//
export async function patch(url, body) {
  try {
    const u = `${baseUrl}${url}`;
    const res = await axios({
      method: 'patch',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}

//
export async function patchfull(url, body) {
  try {
    const u = `${baseUrl}${url}`;
    const res = await axios({
      method: 'patch',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}

//
export async function post(url, body) {
  try {
    const u = `${baseUrl}${url}`;
    // console.log(body);
    const res = await axios({
      method: 'post',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}

//
export async function postfull(url, body) {
  try {
    const u = `${baseUrl}${url}`;
    // console.log(body);
    const res = await axios({
      method: 'post',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}

//
export async function deletefull(url) {
  try {
    const u = `${baseUrl}${url}`;
    const res = await axios({
      method: 'delete',
      url: u,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
}
