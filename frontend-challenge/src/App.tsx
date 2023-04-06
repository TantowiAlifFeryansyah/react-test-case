import React, { useEffect, useState } from 'react';
import getNews from './newsAPI';
import { List, Card, Typography, Image } from 'antd';
const { Paragraph, Text } = Typography;

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string,
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
      <h1 style={{textAlign: 'center', fontSize: 40, marginBottom: 50, marginTop: 30}}>News Headlines</h1>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={news}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title} bordered={true} style={{ width: '600px', height: '570px', textAlign: 'center'}}>
              <div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 10}}>
                  <Image
                    src={item.urlToImage}
                    style={{ height: '300px',objectFit: 'cover'}}
                  />
                </div>

                <div style={{marginTop: 10, paddingBottom: 10, height: '80px'}}>
                  <Paragraph>{item.description}</Paragraph>
                </div>

                <div>
                  <a href={item.url}>Read More</a>
                </div>

                <div>
                  <div style={{fontSize: 0}}>
                  <Text>Author by: {item.author ? item.author : "anonym"}</Text>
                  </div>
                </div>
              </div>

            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
