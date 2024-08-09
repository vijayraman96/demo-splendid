import React, { useEffect, useState } from "react";
import "./ExploreBrand.css";
import splendidWhite from "../../assets/images/splendid_white_logo.svg";
import footerBanner from "../../assets/images/footer_banner.jpg";
import brandBanner from "../../assets/images/brand_banner.jpg";
import brandMeta from "../../assets/images/brand_meta.png";
import alternativeLogo from "../../assets/images/puma_white.svg";
import DiamondIcon from "../../assets/images/diamond.svg";
import useGetBrandList from "../../utils/CustomHooks/useBrandList";
import {
  getImage,
  getImageUrl,
  getMetaValue,
} from "../../utils/Functions/Filter";
import { useParams } from "react-router-dom";

const ExploreBrand = () => {
  const { brandList, getBrandList } = useGetBrandList();
  const [brand, setBrand] = useState();
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    getBrandList({
      brand_ids: `${id}`,
    });
  }, []);
  console.log("brandList", brandList);
  const logo = getImageUrl(
    brandList[0] && brandList[0]?.brand_page_image_urls,
    "Thumbnail",
    "logo"
  ) || alternativeLogo;
  const banner_image =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Banner",
      "banner"
    ) || brandBanner;
  const mainLogo =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "logo"
    ) || alternativeLogo;
  const cardOne =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "card_1"
    ) || brandMeta;
  const cardTwo =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "card_2"
    ) || brandMeta;
  const cardThree =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "card_3"
    ) || brandMeta;
  const cardFour =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "card_4"
    ) || brandMeta;
  const cardFive =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "card_%"
    ) || brandMeta;
  const cardSix =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Thumbnail",
      "card_6"
    ) || brandMeta;
  const footer_banner =
    getImageUrl(
      brandList[0] && brandList[0]?.brand_page_image_urls,
      "Footer",
      "footer"
    ) || footerBanner;
  const banner_title = getMetaValue(
    brandList[0] && brandList[0]?.brand_content_meta,
    "banner_title" 
  ) || "Puma affiliate programe APPLY  Best of all, it's free to join!";
  const banner_description = getMetaValue(
    brandList[0] && brandList[0]?.brand_content_meta,
    "banner_description"
  ) || "Apply now to monetize your  influence! Get gifted, order samples,  discover and build  partnerships. Simply download the  app and apply. We will contact you  once we have reviewed and approved  your application.";
  const footer_description = getMetaValue(
    brandList[0] && brandList[0]?.brand_content_meta,
    "footer_description"
  );
  const footer_li =
    footer_description &&
    footer_description.split("\n").map((item) => item.trim().slice(2));
  return (
    <div>
      <section className="single_brand_page">
        <div className="single_brand_container">
          <div className="logo_container">
            <img src={logo} alt="" />
          </div>
          <div
            className="banner_container"
            style={{
              backgroundImage: `url(${banner_image})`,
            }}
          ></div>
          <div className="card_container">
            <div className="card">
              <div className="content">
                <h2 className="title">{banner_title}</h2>
                <p className="para">{banner_description}</p>
                <div className="brand_button_container">
                  <a>Sign up Here</a>
                </div>
              </div>
            </div>
          </div>
          <div className="brand_title">
            <h2 className="title_2">What are the benefits of joining?</h2>
          </div>
          <div className="brand_card">
            <div className="brand_individual_card">
              <img src={cardOne} alt="" />
              {/* <h6 className="benefits_title">Earn Commission</h6>
              <p className="para">
                Unlock the potential of your content like never before with 30%
                recurring commission for up to one year.
              </p> */}
            </div>
            <div className="brand_individual_card">
              <img src={cardTwo} alt="" />
              {/* <h6 className="benefits_title">Tiered Payouts</h6>
              <p className="para">
                Grow within our program by leveling up to the next affiliate
                tier. The more customers you refer, the more you will get
                rewarded.
              </p> */}
            </div>
            <div className="brand_individual_card">
              <img src={cardThree} alt="" />
              {/* <h6 className="benefits_title">Performance Reports</h6>
              <p className="para">
                Unlock the potential of your content like never before with 30%
                recurring commission for up to one year.
              </p> */}
            </div>
            <div className="brand_individual_card">
              <img src={cardFour} alt="" />
              {/* <h6 className="benefits_title">Earn Commission</h6>
              <p className="para">
                Unlock the potential of your content like never before with 30%
                recurring commission for up to one year.
              </p> */}
            </div>
            <div className="brand_individual_card">
              <img src={cardFive} alt="" />
              {/* <h6 className="benefits_title">Tiered Payouts</h6>
              <p className="para">
                Grow within our program by leveling up to the next affiliate
                tier. The more customers you refer, the more you will get
                rewarded.
              </p> */}
            </div>
            <div className="brand_individual_card">
              <img src={cardSix} alt="" />
              {/* <h6 className="benefits_title">Performance Reports</h6>
              <p className="para">
                Unlock the potential of your content like never before with 30%
                recurring commission for up to one year.
              </p> */}
            </div>
          </div>
        </div>
        <div className="single_brand_footer_container">
          <div className="creator_brand_section">
            <div className="row">
              <div className="col">
                <h3 className="title">What do I need to do as a creator?</h3>
                <ul>
                  {footer_li ? (
                    footer_li.map((item) => {
                      return (
                        <>
                          <li>
                            <img src={DiamondIcon} alt="" />
                            <p className="para">{item}</p>
                          </li>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <li>
                        <img src={DiamondIcon} alt="" />
                        <p className="para">
                          A focus on great, relevant content production
                        </p>
                      </li>
                      <li>
                        <img src={DiamondIcon} alt="" />
                        <p className="para">
                          A love for PUMA, our products and our audience
                        </p>
                      </li>
                      <li>
                        <img src={DiamondIcon} alt="" />
                        <p className="para">Performance tracking</p>
                      </li>
                      <li>
                        <img src={DiamondIcon} alt="" />
                        <p className="para">Our gratitude</p>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="col">
                <div className="image-container footer_img">
                  <h3 className="footer_title2">
                    What do I need to do as a creator?
                  </h3>
                  <img src={footer_banner} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer_content">
              <p className="para">Powered by</p>
              <img src={splendidWhite} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreBrand;
