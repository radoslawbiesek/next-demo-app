import mockedData from "./mockedData.json";

export const getAll = () => mockedData;

export const getById = (id) => mockedData.find((item) => +item.id === +id);
