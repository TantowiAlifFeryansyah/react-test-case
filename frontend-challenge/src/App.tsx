import React, { useEffect, useState } from 'react';
import getNews from './newsAPI';
import { List, Card } from 'antd';

interface Article {
  title: string;
  url: string;
}

function App() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNews();
      setNews(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>News Headlines</h1>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={news}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <a href={item.url}>Read More</a>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
