import axios  from "axios";

const api = axios.create({
    baseURL: "https://dev.obtenmas.com"
});

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
    return respuesta.data;
};