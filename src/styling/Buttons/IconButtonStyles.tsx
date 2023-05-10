import Styles from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";

const IconPadding = "0px 10px";
const fontSize = "35px";

export const FaceBookIcon = Styles(FacebookIcon)`
    padding: ${IconPadding};
    font-size: ${fontSize} !important;
`;

export const InstaGramIcon = Styles(InstagramIcon)`
    padding: ${IconPadding};
    font-size: ${fontSize} !important;
`;

export const TwitteRIcon = Styles(TwitterIcon)`
    padding: ${IconPadding};
    font-size: ${fontSize} !important;
`;

export const LinkedinIcon = Styles(LinkedInIcon)`
    padding: ${IconPadding};
    font-size: ${fontSize} !important;
`;

export const YoutubeIcon = Styles(YouTubeIcon)`
    padding: ${IconPadding};
    font-size: ${fontSize} !important;
`;

export const GlobeIcon = Styles(LanguageIcon)`
    color: #9f9999;
    margin: auto
`;

export const HeartIcon = Styles(FavoriteIcon)`
    position: relative;
    top: 7px;
    color: red;
`;

export const GreaterThanIcon = Styles(KeyboardArrowRightIcon)`
    position: relative;
    top: 7px;
`;

export const CrossButtonIcon = Styles(CloseIcon)`
    position: relative;
    left: 421px;
    top: -35px;
`;
