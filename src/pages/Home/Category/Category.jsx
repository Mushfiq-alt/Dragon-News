import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            <h3>Number of News: {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}    
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;