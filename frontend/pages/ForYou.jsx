import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../src/components/Loader";

const ForYou = () => {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "http://localhost:5555/news";
  const API_KEY = "b55e97338f8a4002bc7cecb665d82355";
  const API_URL = "https://newsapi.org/v2/everything";


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(BACKEND_URL);
        const q = response.data.category;
        setQuery(q);
      } catch (error) {
        console.error("Error fetching category:", error.message);
      }
    };
    fetchCategory();
  }, []); 


  useEffect(() => {
    if (!query) return; 

    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}?q=${query}&apiKey=${API_KEY}`);
        setNews(response.data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]); 

  return (
    <div className="p-6 bg-base-300 flex justify-center items-center min-h-screen">
      {loading ? (
        <Loader />
      ) : news.length === 0 ? (
        <p className="text-xl font-bold">No results found for "{query}"</p>
      ) : (
        <div className="flex justify-evenly flex-wrap gap-y-9">
          {news.map((post, index) => (
            <div key={index} className="card card-xs w-108 card-side card-border bg-base-200">
              <figure>
                  {post.urlToImage? <img src={post.urlToImage} alt="news preview" /> : <div className="skeleton h-full w-64" />}
              </figure>
              <div className="card-body">
                <div className="card-title">{post.title}</div>
                <p>Source: {post.source.name}</p>
                <p>{new Date(post.publishedAt).toLocaleString()}</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-soft">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForYou;
