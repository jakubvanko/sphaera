import axios from "axios";

axios.defaults.baseURL = "https://sphaera.jakubvanko.com/api/";

/*
    Request interceptor for login token authorization
*/
axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = "Bearer " + token;
    return config;
});


/*
    Free-for-all API calls
*/
export const getEvents = () => axios.get("/events");

export const getEvent = (id) => axios.get(`/events/${id}`);

export const registerUser = (firstName, lastName, email, password) => axios.post("/users", {
    firstName,
    lastName,
    email,
    password
});

export const loginUser = async (email, password) => {
    const result = await axios.post("/users/login", {email, password});
    return result.token;
};

export const resetPassword = (email) => axios.post("users/resetpassword", {email});


/*
    Login only API calls
*/
export const buyTicket = (user, event, area) => axios.post("/tickets", {user, event, area});

// Using id other than "current" is possible only for admins
export const getUser = (id = "current") => axios.get(`/users/${id}`);

export const deleteUser = (id = "current") => axios.delete(`/users/${id}`);

export const updateUser = (id = "current", toUpdate) => axios.patch(`/users/${id}`, toUpdate);


/*
    Admin only API calls
*/
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const result = await axios.post("/uploads", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return result.name;
};

export const createEvent = async (artist, date, imageFile, areas) => {
    const image = await uploadImage(imageFile);
    return axios.post("/events", {artist, date, image, areas});
};

export const deleteEvent = (id) => axios.delete(`/events/${id}`);

export const updateEvent = (id, toUpdate) => axios.patch(`/events/${id}`, toUpdate);




