import React from "react";
import Layout from "../../ui/layout/Layout";
import styles from "./home.module.css";
import ButtonWork from "../../ui/Buttons/ButtonWork";
import Search from "../../ui/Search/Search";
import Catalog from "../../ui/Catalog/Catalog";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className={styles.panel}>
          <ButtonWork active={true}>Заказчикам</ButtonWork>
          <ButtonWork>Исполнителям</ButtonWork>
        </div>
        <div className={styles.work}>
          <Search />
          <Catalog />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
