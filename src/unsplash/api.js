import axios from "axios";

// Create method will create an instance of the axios client with a couple of default properties.
const unsplash =axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f146998025b7fa126efaa788219fbf65ef34059e9513792b1eac382000a08072"
  }
});


export const onSearchSubmit = async (term,page) => {
    // Two arguments:
    // 1. Address we want to make a get request to
    // 2. Object with multiple options to configure this request (more config in unsplash.js)
    const response = await unsplash.get("/search/photos", {
      params: { query: term,page,per_page:9 }
    });

    return response.data.results;
  };

  export const getRandom = async()  => {
    // Two arguments:
    // 1. Address we want to make a get request to
    // 2. Object with multiple options to configure this request (more config in unsplash.js)
    const response = await unsplash.get("/photos/random");

    return response.data.urls.regular;
  };