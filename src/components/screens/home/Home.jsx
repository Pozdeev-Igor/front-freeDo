import React, { useState } from "react";
import Layout from "#ui/layout/Layout";
import styles from "./home.module.scss";
import ButtonWork from "#ui/Buttons/ButtonWork";
import Search from "#ui/Search/Search";
import Catalog from "#ui/Catalog/Catalog";
import image from "#assets/images/image_card.png";
const Home = () => {
  const [status, setStatus] = useState('заказчикам');
  const data = [
    {
      id: 1,
      profession: "дизайнер, UX/UI дизайнер",
      type: "Услуги, IT, интернет, телеком, создание сайтов",
      name: "Александр Иванов",
      date: "23.05, 23:15",
      views: 30,
      image: image,
      text: "Добрый день.\nМеня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики\n- Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы...",
    },
    {
      id: 2,
      profession: "дизайнер, UX/UI дизайнер",
      type: "Услуги, IT, интернет, телеком, создание сайтов",
      name: "Александр Иванов",
      date: "23.05, 23:17",
      views: 30,
      image: image,
      text: "Добрый день. \n Меня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики\n- Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы...",
    },
  ];

 

  const data2 = [
    {
      id: 1,
      profession: "Ищу дизайнера",
      type: "Услуги, IT, интернет, телеком, создание сайтов",
      name: "Александр Иванов",
      date: "23.05, 23:15",
      views: 30,
      image: image,
      text: "Добрый день.\nМеня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики\n- Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы...",
    },
    {
      id: 2,
      profession: "Мне нужен программест",
      type: "Услуги, IT, интернет, телеком, создание сайтов",
      name: "Александр Иванов",
      date: "23.05, 23:15",
      views: 30,
      image: image,
      text: "Добрый день. \n Меня зовут Александр Иванов, три года с переезда в США я предлагаю услуги для вашего бизнеса, связанные с графическим дизайном, создание сайтов, айдентики\n- Графический дизайн, туда входят инфографика, иллюстрация, дизайн упаковки, маркетинговые материалы, логотипы...",
    },
  ];
  return (
    <Layout>
      <div>
        <div className={styles.panel}>
          <ButtonWork setStatus={setStatus}  active={status} >заказчикам</ButtonWork>
          <ButtonWork setStatus={setStatus} active={!status}>исполнителям</ButtonWork>
        </div>

        <div className={styles.container}>
          <Search />
          <Catalog data={status ? data : data2} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
