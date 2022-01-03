import logo from "../../Assets/_General/Logo.svg";
import locationPin from "../../Assets/_General/LocationPin.svg";
import profileImg from "../../Assets/_General/Profile.svg";
import cartImg from "../../Assets/_General/Cart.svg";
import searchIconImg from "../../Assets/_General/Search.svg";
import homePageImage from "../../Assets/Home/MainImage.png";
import bgLineImg from "../../Assets/_General/BgLine.svg";
import StarImg from "../../Assets/_General/Star.svg";

export const BG_LINE_IMG = bgLineImg;
export const STAR_IMG = StarImg;

export const NAVBAR_DATA = {
  deleiverTo: "Deliver to",
  profie: "Profile",
  cart: "Cart",
  login: "Login / Signup",
  images: {
    LOGO_IMG: logo,
    LOCATION_PIN: locationPin,
    PROFILE_IMG: profileImg,
    CART_IMG: cartImg,
    SEARCH_ICON_IMG: searchIconImg,
  },
};

export const HOME_DATA = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  button: "See top picks ->",
  recommended: "Recommended for You",
  topPicks: "Top Picks",
  viewAll: "View all ->",
  ratings: "Reviews",
  images: {
    MAIN_IMAGE: homePageImage,
  },
};
