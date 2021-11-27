import { useState, useEffect } from 'react';
import { getNews } from "../Service/api.js";
import axios from "axios";

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const {data} = await axios.get("https://inshorts-news-server.herokuapp.com/");
        setNews(data)
    }

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news ? news.map((article, i) => (
                    <Article key={i} article={article} />
                )) : <h3>Loading.....</h3>
            }
        </InfiniteScroll>
    )
}

export default Articles;