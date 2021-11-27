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
        console.log("pankaj")
        const {data} = await axios.get("http://localhost:8000/news");
        setNews(data)
        console.log(news)
    }

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map((article, i) => (
                    <Article key={i} article={article} />
                ))
            }
        </InfiniteScroll>
    )
}

export default Articles;