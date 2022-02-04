import React from "react";
import "./Home.css";
import backimg from "./background.jpg";
import Product from "../Product/Product";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="container">
          <div className="home_container">
            <img className="home_image" src={backimg} alt="" />
            <div className="home_row">
              <Product
                id="1"
                title="제품 1"
                price="30,000"
                image="https://imgc.1300k.com/aaaaaib/goods/215024/46/215024460467.jpg?3"
                rating={5}
              />
              <Product
                id="2"
                title="제품 2"
                price="22,000"
                image="http://image.auction.co.kr/itemimage/1a/de/08/1ade0827d6.jpg"
                rating={5}
              />
              <Product
                id="3"
                title="제품 3"
                price="19,000"
                image="https://shop4.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop4.daumcdn.net%2Fshophow%2Fp%2FB5101293117.jpg%3Fut%3D20210116072114"
                rating={5}
              />
            </div>
            <div className="home_row">
              <Product
                id="4"
                title="제품 4"
                price="29,000"
                image="https://m.ontop.kr/web/product/big/202111/5926aa58b4152d6b6b4c7d27d1e24e76.jpg"
                rating={5}
              />
              <Product
                id="5"
                title="제품 5"
                price="32,000"
                image="http://img.danawa.com/prod_img/500000/314/010/img/7010314_1.jpg?shrink=330:330&_v=20190110114756"
                rating={5}
              />
              <Product
                id="6"
                title="제품 6"
                price="28,500"
                image="http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1436/hot1613611465747.jpg"
                rating={5}
              />
            </div>
            <div className="home_row">
              <Product
                id="7"
                title="제품 7"
                price="34,500"
                image="https://imgc.1300k.com/aaaaaib/goods/215024/87/215024872385.jpg?3"
                rating={5}
              />
              <Product
                id="8"
                title="제품 8"
                price="22,500"
                image="http://s2pink.com/web/product/big/202009/b126e0dba3795b987f98b5e0a2e60ca7.jpg"
                rating={5}
              />
              <Product
                id="9"
                title="제품 9"
                price="12,000"
                image="https://image.msscdn.net/images/goods_img/20210826/2090180/2090180_1_500.jpg"
                rating={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
