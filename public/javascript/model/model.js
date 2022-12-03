import { api_url, main_url } from '../utils/utils.js';
import axios from 'axios';

export async function get(url) {
  try {
    const u = `${api_url}${url}`;
    const res = await axios({
      method: 'get',
      url: u,
      withCredentials: true,
    });

    return res.data.data;
  } catch (error) {
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//

//
export async function getfull(url) {
  try {
    const u = `${api_url}${url}`;
    const res = await axios({
      method: 'get',
      url: u,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    // console.log('blaciris 🔥', error);
    error.local = '🔥';
    this.localPost('/write-to-log', error);
    throw error.response ? error.response.data : error;
  }
}

//
export async function patch(url, body) {
  try {
    const u = `${api_url}${url}`;
    const res = await axios({
      method: 'patch',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data.data;
  } catch (error) {
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//
export async function patchfull(url, body) {
  try {
    const u = `${api_url}${url}`;
    const res = await axios({
      method: 'patch',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data;
  } catch (error) {
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//
export async function post(url, body) {
  try {
    const u = `${api_url}${url}`;
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
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//
export async function postfull(url, body) {
  try {
    const u = `${api_url}${url}`;
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
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//
export async function deletefull(url) {
  try {
    const u = `${api_url}${url}`;
    const res = await axios({
      method: 'delete',
      url: u,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//

//
export async function freePost(url, body) {
  try {
    const res = await axios({
      method: 'post',
      url,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data;
  } catch (error) {
    console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}

//

//
export async function localPost(url, body) {
  try {
    const u = `${main_url}${url}`;
    const res = await axios({
      method: 'post',
      url: u,
      Cookies: true,
      withCredentials: true,
      data: body,
    });

    return res.data;
  } catch (error) {
    // console.log('blaciris 🔥', error);
    throw error.response ? error.response.data : error;
  }
}
