import React from "react";
import Card from "./Card";

const SocialCards = () => {
  return (
    <div className="w-full flex flex-wrap items-center lg:items-start justify-center gap-4 px-8 -mt-16">
      <Card
        key='1'
        colorSocial={"bg-Facebook"}
        imageSocial={"../../public/images/icon-facebook.svg"}
        nickname={"@nathanf"}
        followers={"1987"}
        textSuscribes={"followers"}
        arrow={"../../public/images/icon-up.svg"}
        number={"12"}
      />

      <Card
        colorSocial={"bg-Twitter"}
        imageSocial={"../../public/images/icon-twitter.svg"}
        nickname={"@nathanf"}
        followers={"1044"}
        textSuscribes={"followers"}
        arrow={"../../public/images/icon-up.svg"}
        number={"99"}
      />

      <Card
        colorSocial={"bg-gradient-to-r from-Instagram1 to bg-instagram2"}
        imageSocial={"../../public/images/icon-instagram.svg"}
        nickname={"@realnathanf"}
        followers={"11k"}
        textSuscribes={"followers"}
        arrow={"../../public/images/icon-up.svg"}
        number={"1099"}
      />

      <Card
        colorSocial={"bg-YouTube"}
        imageSocial={"../../public/images/icon-youtube.svg"}
        nickname={"@Nathan F."}
        followers={"8239"}
        textSuscribes={"subscribers"}
        arrow={"../../public/images/icon-down.svg"}
        unsuscribe='true'
        number={"144"}
      />
    </div>
  );
};

export default SocialCards;
