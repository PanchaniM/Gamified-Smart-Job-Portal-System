import axios from "axios";

export const uploadImages = async (formData, path) => {
  try {
    const { data } = await axios.post(
      ` http://localhost:8000/api/photoupload/uploadImages`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
