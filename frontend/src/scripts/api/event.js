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
const buyTicket = async (event, area) => {
  const result = await axios.post("/tickets", { event, area });
  return result.data;
};

const getTicket = async (id) => {
  const result = await axios.get(`/tickets/${id}`);
  return result.data;
};

// Admin only
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const result = await axios.post("/uploads", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data.name;
};

const create = async (artist, date, imageFile, areas) => {
  const image = await uploadImage(imageFile);
  const result = await axios.post("/events", { artist, date, image, areas });
  return result.data;
};

const deleteById = async (id) => {
  const result = await axios.delete(`/events/${id}`);
  return result.data._id;
};

const updateById = async (id, toUpdate) => {
  const result = await axios.patch(`/events/${id}`, toUpdate);
  return result.data;
};

export default {
  getAll,
  getById,
  updateById,
  deleteById,
  buyTicket,
  getTicket,
  create,
};
