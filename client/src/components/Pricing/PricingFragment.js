import React from "react";
import {
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardExp,
  PricingCardLength,
  PricingCardFeatures,
  ImgWrapper,
  Img
} from "./Pricing.elements";

const PricingFragment = ({ id, title, title_img, dist, likes_hash_tags }) => {
  const hashtags = likes_hash_tags.map((hashtag) => {
    return <> {hashtag}<br/> </>
  });

  return (
    <PricingCard>
      <PricingCardInfo>
        <PricingCardIcon>
          <ImgWrapper>
            <Img src={title_img} alt={title} />
          </ImgWrapper>
        </PricingCardIcon>
        <PricingCardPlan>{title}</PricingCardPlan>
        <PricingCardExp></PricingCardExp>
        <PricingCardLength>{dist} km</PricingCardLength>
        <PricingCardFeatures>
          {hashtags}
        </PricingCardFeatures>
      </PricingCardInfo>
    </PricingCard>
  );
};

export default PricingFragment;