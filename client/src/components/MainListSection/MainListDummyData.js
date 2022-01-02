const dummyData = [
  {
    id:1,
    title: "투썸플레이스 강남역중앙점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipNscA-VLAqpQFx-5Y90xi1aLxBrz7mZXc5YIhK1=w408-h306-k-no",
    lat: 37.49943,
    long: 127.02795,
    likes_hash_tags: ["#조용함", "#여자많음", "#강남핫플"]
  },
  { 
    id:2,
    title: "커피빈 삼성전자강남사옥점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipPVcJ0Xyv07Rhw6ALDcizhWRx2KGyrJ4LvJt-wX=w426-h240-k-no",
    lat: 37.49708,
    long: 127.02648,
    likes_hash_tags: ["#조용함", "#분위기짱", "#강남핫플"]
  },
  {
    id:3,
    title: "스타벅스 강남삼성타운점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipNhbS32tIwGlZIAH8Fx98zSCcGr8Q_nWOibyMY2=w449-h240-k-no",
    lat: 37.49576,
    long: 127.02763,
    likes_hash_tags: ["#조용함", "#인테리어", "#강남핫플"]
  },
  { 
    id:4,
    title: "투썸플레이스 강남대륭타워점",
    title_img: "https://lh4.googleusercontent.com/E_UKp9DNbVL9MMbASl7VlTacB6QSTZyoyz-J-rX8wGypaeyXmMnWumxUUttQu-DN=w408-h290-k-no",
    lat: 37.49545,
    long: 127.02941,
    likes_hash_tags: ["#조용함", "#인테리어", "#강남핫플"]
  },
  {
    id:5,
    title: "커피앳웍스",
    title_img: "https://lh3.googleusercontent.com/KzgvTmiHglpQx7ZfcIvAXJ6sOhM0K_GKjE2RKQ-AKQ_lumkSK7xqqjKDXChw9cLG2w=w408-h508-k-no",
    lat: 37.49446,
    long: 127.02995,
    likes_hash_tags: ["#조용함", "#여자많음", "#강남핫플"]
  },
  { 
    id:6,
    title: "커피빈 현대자동차강남오토스퀘어점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipMEG4kqk_yeaebdcMuafeuWh8cIphLHkKGZdAil=w493-h240-k-no",
    lat: 37.49419,
    long: 127.02988,
    likes_hash_tags: ["#조용함", "#분위기짱", "#강남핫플"]
  },
  {
    id:7,
    title: "스타벅스 강남삼성타운점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipNhbS32tIwGlZIAH8Fx98zSCcGr8Q_nWOibyMY2=w449-h240-k-no",
    lat: 37.49576,
    long: 127.02763,
    likes_hash_tags: ["#조용함", "#인테리어", "#강남핫플"]
  },
  { 
    id:8,
    title: "역삼동커피",
    title_img: "https://lh3.googleusercontent.com/BRai21rlbNWyOgHtfErXyvqp24ppMX-dfAMI1YRrK3wC-FgW0E5D4NHctchP1HKXwQ=w408-h408-k-no",
    lat: 37.49533,
    long: 127.03015,
    likes_hash_tags: ["#조용함", "#인테리어", "#강남핫플"]
  },
  {
    id:9,
    title: "커피빈 강남역랭기지타워점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipOIMR0oBBiE8_WfgLTd4kH8lnXNQG_y-LUaaPpJ=w426-h240-k-no",
    lat: 37.49666,
    long: 127.03023,
    likes_hash_tags: ["#조용함", "#여자많음", "#강남핫플"]
  },
  { 
    id:10,
    title: "커피빈 서초부티크모나코점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipNB4FA9t_6ZFcJxoSB_fbcew5zXLJCswAr5CVSo=w408-h612-k-no",
    lat: 37.49731,
    long: 127.02433,
    likes_hash_tags: ["#조용함", "#분위기짱", "#강남핫플"]
  },
  {
    id:11,
    title: "커피빈 강남역12번출구점",
    title_img: "https://lh5.googleusercontent.com/fJnQVDaNAWy1gQPXFtiCedc-yjGUIC3DnSdc6yua3QCKDmxEGg9tv1BMS4-6PIw=w408-h408-k-no",
    lat: 37.49894,
    long: 127.02925,
    likes_hash_tags: ["#조용함", "#인테리어", "#강남핫플"]
  },
  { 
    id:12,
    title: "만랩커피 강남역점",
    title_img: "https://lh5.googleusercontent.com/p/AF1QipPtmwxfO19s-c8ZsdZdMQjjMkYpcP5UiRepIRQ9=w408-h408-k-no",
    lat: 37.49970,
    long: 127.02852,
    likes_hash_tags: ["#조용함", "#인테리어", "#강남핫플"]
  }
];

// 강남역의 현재위치
const currentLocation = {
  lat: 37.49798,
  long: 127.02748,
};

export { dummyData, currentLocation };
