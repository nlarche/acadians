import React from "react";
import moment from "moment";
import { css } from "glamor";
import { SocialIcon } from "react-social-icons";

const footer = css({
  display: "flex",
  justifyContent: "center",
  padding: "20px",
  background: "black"
});

const social = css({
  margin: "0px 20px"
});

const Footer = () => (
  <footer {...footer}>
    <SocialIcon {...social} url="https://www.facebook.com/acadiansofficial/" />
    <SocialIcon {...social} url="https://www.instagram.com/acadiansofficial/" />
    <SocialIcon
      {...social}
      url="https://www.youtube.com/channel/UC0rrdaNEj1W_CNthGTwpcRw"
    />
    <SocialIcon {...social} url="https://soundcloud.com/acadians" />
  </footer>
);

export default Footer;
