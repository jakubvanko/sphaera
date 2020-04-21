import axios from "axios";

const register = (firstName, lastName, email, password) => axios.post("/users", {
    firstName,
    lastName,
    email,
    password
});

const login = async (email, password) => {
    const result = await axios.post("/users/login", {email, password});
    return result.data.token;
};

const resetPassword = (email) => axios.post("users/resetpassword", {email});

// Using id other than "current" is possible only for admins
const getById = async (id = "current") => {
    const result = await axios.get(`/users/${id}`);
    return result.data;
};
const deleteById = async (id = "current") => {
    const result = await axios.delete(`/users/${id}`);
    return result.data._id;
};
const updateById = async (id = "current", toUpdate) => {
    const result = await axios.patch(`/users/${id}`, toUpdate);
    return result.data;
};


export default {
    register,
    login,
    resetPassword,
    getById,
    updateById,
    deleteById
};
