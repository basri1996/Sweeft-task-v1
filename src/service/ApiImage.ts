import axios from "axios";
const API_URL = 'https://api.unsplash.com';
const Access_Key ="AyjW5EijlRnP6-1lBFyjyOJZAZe7W7w4tKPlPsd2jqM";

export async function getImages(page:number) {
  const res = await axios.get(`${API_URL}/photos/`,{
    params: {
    client_id: Access_Key,
    order_by:"popular",
    page:page
    },
  });

  return res.data as unknown as any[];
}
export async function getImagesByName(page:number,query:string) {
  const res = await axios.get(`${API_URL}/search/photos`,{
    params: {
    client_id: Access_Key,
    query:query,
    order_by:"popular",
    page:page
    },
  });
  console.log("Api getImagesByName succeced")
  return res.data.results as unknown as any[];
}

export async function getImagesStats(id:any) {
  const res = await axios.get(`${API_URL}/photos/${id}/statistics`,{
    params: {
    client_id: Access_Key,
    },
  });
  return res as any;
}



