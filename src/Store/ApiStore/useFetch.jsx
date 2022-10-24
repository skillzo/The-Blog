import { useEffect, useState } from "react";
import { useNews } from "../Context/AuthContext";

function useFetch() {
  const { input } = useNews();
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };
  const url = `https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=${input}&lang=en&sort_by=relevancy&page=1&media=True`;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(true);
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
        } finally {
          setLoading(false);
        }
      }
      getdata();
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line
  }, [input]);
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
  return { newData, loading, error };
}

export default useFetch;
