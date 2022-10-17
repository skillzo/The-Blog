import { useEffect, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      async function getdata() {
        try {
          const response = await fetch(url, options);
          if (response.status !== 200) {
            throw new Error(`This is an Api Error: ${response.status}`);
          } else {
            var cData = await response.json();
            setData(cData.articles);
            setError("");
          }
        } catch (e) {
          setError(e.message);
          setData("");
        }
      }
      // getdata();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((response) => {
  //       return response?.json();
  //     })
  //     .then((data) => {
  //       console.log("data; ", data);
  //       return setData(data?.articles);
  //     });
  // }, []);
  const newData = [];
  for (const key in data) {
    newData.push({
      id: data[key]._id,
      image:
        data[key].media ||
        "https://reliefweb.int/modules/custom/reliefweb_meta/images/default.png",
      published_date: data[key].published_date.slice(0, 10),
      published_time: data[key].published_date.slice(11, 19),
      title: data[key].title,
      summary: data[key].summary,
      link: data[key].link,
      author: data[key].author || "skillzo",
      category: data[key].topic.toUpperCase(),
      copyright: data[key].rights,
    });
  }

  console.log("new Data", data);
  return { newData, loading, error };
}

export default useFetch;
