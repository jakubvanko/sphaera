import { EVENT } from "../actionTypes";

export const createRequest = (artist, date, imageFile, areas) => ({
  type: EVENT.CREATE_REQUEST,
  payload: {
    artist,
    date,
    imageFile,
    areas,
  },
});
