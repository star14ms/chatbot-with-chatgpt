import { useState, useEffect } from 'react';
import ChatBot from '@/components/chatbot';
import { MessageData } from "react-chat-bot/src/shared/types/react-chat-bot";

import styles from './index.module.scss';


export default function Index() {
  const getMetadataAll = async (urls: string[]) => {
    return Promise.all(urls?.map((url) => getMetadata(url)));
  }

  const getMetadata = async (url: string) => {
    // Fetch the HTML from the URL
    const response = await fetch(url);
    const html = await response.text();
  
    // Parse the HTML into a document
    const doc = new DOMParser().parseFromString(html, 'text/html');
  
    // Extract the metadata
    const metadata = {
      url: url,
      title: doc.querySelector('title')?.innerText ?? '',
      description: doc.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      image: doc.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? '',
      // ...extract other metadata as needed...
    };
  
    return metadata;
  }

  const urls = [
    'https://fastcampus.co.kr/data_online_dpnlp', 
    'https://fastcampus.co.kr/data_online_dpnlg',
    'https://fastcampus.co.kr/dev_online_computer',
    'https://fastcampus.co.kr/data_online_dl',
    'https://fastcampus.co.kr/data_online_bertgpt3',
    'https://fastcampus.co.kr/b2g_kdigitaltraining_ai',
    'https://fastcampus.co.kr/data_red_gnn',
    'https://fastcampus.co.kr/data_online_tensorflowhub',
  ]

  const [scenario, setScenario] = useState<MessageData[][]>([]);

  useEffect(() => {
    getMetadataAll(urls).then((metaDataList) => {
      const newScenario = [
        [
          {
            agent: 'bot',
            type: 'url',
            metaDataList,
            urlText: '강의 바로가기'
          },
          {
            agent: 'bot',
            type: 'text',
            text: '링크를 입력하면 프리뷰를 보여줍니다.',
          },
        ]
      ]

      setScenario(newScenario);
    })
  }, [])

  return (
    <div className={`${styles.page} has-background-light2`}>
      <ChatBot
        scenario={scenario}
        clearButton={true}
        isOpen={true}
        ratingEnable={true}
      />
    </div>
  );
};
