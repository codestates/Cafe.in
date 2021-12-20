import React from "react";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock, GiBlackBook } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardExp,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingBottom,
  ImgWrapper,
  Img
} from "./Pricing.elements";

const PricingFragment = ({ title, title_img, dist, likes_hash_tags }) => {
  const hashtags = likes_hash_tags.map((hashtag) => {
    return <PricingCardFeature>{hashtag}</PricingCardFeature>
  });

  return (
    <PricingCard>
      <PricingCardInfo>
        <PricingCardIcon>
          {/* <GiRock /> */}
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
