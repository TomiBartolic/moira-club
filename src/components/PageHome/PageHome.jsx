import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BASE_URL = "https://cms-nocache-api.d1b.pw/";
const ACCESS_TOKEN = "jOlf3/Ac68d2Jwy54kH+/av6rwq3NridOhVKPtVay1k=";

export function PageHome() {
 const [apps, setApps] = useState({ content: { articles: [] } });
 const [learnApps, setLearnApps] = useState({ content: { apps: [] } });

 useEffect(() => {
  const getApps = async () => {
   try {
    const response = await fetch(
     `${BASE_URL}content/section/moira-exclusives-games`,
     {
      headers: {
       Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
     },
    );

    if (!response.ok) {
     throw new Error("Network response was not ok");
    }

    const appsData = await response.json();
    setApps(appsData);
   } catch (error) {
    console.error("Error fetching apps:", error);
   }
  };

  getApps();
 }, []);
 useEffect(() => {
  const getLearn = async () => {
   try {
    const response = await fetch(
     `${BASE_URL}content/section/moira-education-apps`,
     {
      headers: {
       Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
     },
    );

    if (!response.ok) {
     throw new Error("Network response was not ok");
    }

    const learnAppsData = await response.json();
    setLearnApps(learnAppsData);
   } catch (error) {
    console.error("Error fetching apps:", error);
   }
  };

  getLearn();
 }, []);
 console.log(apps);
 console.log(learnApps);

 return (
  <div className="container">
    <div className="section-title d-flex justify-content-between my-3">
   <h2>Play</h2>
    <button className="btn btn-light">See all</button>
    </div>

   <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
     clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
   >
    {apps.content.articles.map((app) => (
     <SwiperSlide key={app.id} className="cards">
      <a href={app.excerpt}>
       <div className="card">
        <div className="card-body">
         <h3 className="card-title">{app.title}</h3>
         <p className="card-text">{app.meta_description}</p>
        </div>
       </div>
      </a>
     </SwiperSlide>
    ))}
   </Swiper>
    <div className="section-title d-flex justify-content-between my-3">
   <h2>Learn</h2>
    <button className="btn btn-light">See all</button>
    </div>

   <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
     clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
   >
    {learnApps.content.apps.map((learnApp) => (
     <SwiperSlide key={learnApp.id} className="cards">
      <a href={learnApp.src}>
       <div className="card">
        <div className="card-body">
         <h3 className="card-title">{learnApp.name}</h3>
         <p className="card-text">{learnApp.description}</p>
        </div>
       </div>
      </a>
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
}
