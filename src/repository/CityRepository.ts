async function fetchCities() {
  try {
    const response = await fetch(
      "https://zgradovi-back-7blyz.kinsta.app/api/v1/cities?sortBy=name&sortType=ASC",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im50eXJtIiwiaWF0IjoxNzQyOTk4ODMzLCJleHAiOjE3NDMwODUyMzN9.ukmO374MVMkoUayWAsXIw8M_Ry1NkaGCILr1yfQ95yc",
        },
        method: "GET",
      }
    );
    const data = await response.json();
    return data.data.cities;
  } catch (e) {
    throw "Failed to fetch cities";
  }
}

export { fetchCities };
