import axios from "axios";

const getAll = async () => {
    const result = await axios.get("/events");
    return result.data;
};

const getById = async (id) => {
    const result = await axios.get(`/events/${id}`);
    return result.data;
};

// Login only
const buyTicket = (user, event, area) => axios.post("/tickets", {user, event, area});

// Admin only
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const result = await axios.post("/uploads", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return result.name;
};

const create = async (artist, date, imageFile, areas) => {
    const image = await uploadImage(imageFile);
    return axios.post("/events", {artist, date, image, areas});
};

const deleteById = (id) => axios.delete(`/events/${id}`);

const updateById = (id, toUpdate) => axios.patch(`/events/${id}`, toUpdate);


export default {
    getAll,
    getById,
    updateById,
    deleteById,
    buyTicket,
    create
};
