import React, { useEffect } from "react";
import "./ExploreCard.css";
import { Container, Col, Card } from "react-bootstrap";
import SecondaryButton from "../../../Components/Button/SecondaryButton/SecondaryButton";
import { ExploreData } from "./ExploreData";
import useGetBrandList from "../../../utils/CustomHooks/useBrandList";
import { getImage, getMetaValue, getImageUrl } from "../../../utils/Functions/Filter";
import dummy from '../../../assets/images/dummy.png'
const ExploreCard = () => {
  const { brandList, getBrandList } = useGetBrandList();
  useEffect(() => {
    getBrandList();
  }, []);
  console.log('brandList',brandList)
  return (
    <div className="explore_card">
      <Container>
        <div class="explore_row">
          {brandList.map((item, index) => {
            const brandImage = getImageUrl(
              brandList[index]?.brand_page_image_urls,
              "Thumbnail",
              "thumbnail"
            );
            console.log('brandImage', brandImage);
            
            return (
              <Col lg={4} md={6} sm={12}>
                <Card id={item.id}>
                  <div className="image_container">
                    {
                      brandImage ? <img className="bg_image" src={brandImage} /> : <img src={dummy} className="dummy" />
                    }
                    
                    {/* <img className="logo" src={item.logo} /> */}
                  </div>
                  <div className="title_container">
                    <h5 className="explore_card_title">{item?.brand_name}</h5> 
                    <a href={item?.website_url ? item?.website_url : ""}>{item.brand_name}</a>
                    <p class="explore_para">{item?.brand_description ? item?.brand_description : "Puma SE is a German multinational corporation who design and manufacture athletic and casual footwear, apparel, and accessories, headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world."}</p>
                    <SecondaryButton url={`/explore/brand/${item?.brand_id}`} title={"Learn more"} />
                  </div>
                </Card>
              </Col>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ExploreCard;
