import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Search = () => {
    const { q } = useParams();
    const API_KEY = "b55e97338f8a4002bc7cecb665d82355";
    const API_URL = "https://newsapi.org/v2/everything";

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);  // Start loading
                const response = await axios.get(`${API_URL}?q=${q}&apiKey=${API_KEY}`);
                setNews(response.data.articles);
            } catch (error) {
                console.error("Error fetching news:", error.message);
            } finally {
                setLoading(false);  // Stop loading
            }
        };

        fetchNews();
    }, [q]);

    return (
        <div className="p-6 bg-base-300 flex justify-evenly flex-wrap gap-y-9">
            {loading ? (  
                // Show loader when loading
                <div className="text-center text-xl font-bold">
                    Loading...
                </div>
            ) : (
                // Show news after loading
                news.length > 0 ? (
                    news.map((post, index) => (
                        <div key={index} className="card card-xs w-108 card-side card-border bg-base-200">
                            <figure>
                                <img src={post.urlToImage} alt="news preview" />
                            </figure>
                            <div className="card-body">
                                <div className="card-title">{post.title}</div>
                                <p>Source: {post.source.name}</p>
                                <p>{post.publishedAt}</p>
                                <div className="card-actions">
                                    <button className="btn btn-sm btn-soft">
                                        <a href={post.url} target="_blank" rel="noopener noreferrer">Read more</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl font-bold">
                        No news found for "{q}"
                    </div>
                )
            )}
        </div>
    );
};

export default Search;
