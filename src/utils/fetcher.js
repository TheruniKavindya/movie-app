const fetcher = (url) => {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res);
};

export default fetcher;
