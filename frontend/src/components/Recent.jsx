import React, { useEffect, useState } from "react";
import axios from "axios";

const Recent = () => {
    const API_KEY = "b55e97338f8a4002bc7cecb665d82355";
    const API_URL = "https://newsapi.org/v2/everything";
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(`${API_URL}?q=everything&apiKey=${API_KEY}`);
          setNews(response.data.articles);
        } catch (error) {
          console.error("Error fetching news:", error.message);
        }
      };
  
      fetchNews();
    }, []);
  
  
    return (
      <div className="p-6 bg-base-300 flex justify-evenly flex-wrap gap-y-9">
        {news?.map((post, index) => (
          <div key={index} className="card card-xs w-108 card-side card-border bg-base-200">
            <figure>
              <img src={post.urlToImage} alt="news preview" />
            </figure>
            <div className="card-body">
              <div className="card-title">{post.title}</div>
              <p>Source: {post.source.name}</p>
              <p>{post.publishedAt}</p>
              <div className="card-actions">
                  <button className="btn btn-sm btn-soft"><a href={post.url}>Read more</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Recent