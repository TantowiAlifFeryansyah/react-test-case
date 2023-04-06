import axios from 'axios';

const apiKey: string = 'da29de7e67e64cea91fd39cff9482167';
const apiUrl: string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string,

}

const getNews = async (): Promise<Article[]> => {
    try {
        const response = await axios.get(apiUrl);
        return response.data.articles;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default getNews;
