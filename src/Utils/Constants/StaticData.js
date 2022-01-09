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
export const LOGO_IMG = logo;

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

export const PRODUCT_PAGE_DATA = {
  addToCart: "Add to Cart",
  placeOrder: "Place Order",
  deliverTo: "Deliver to",
  sizes: "Sizes",
  uploadImage: "Upload Image",
  requiredAttachments: "Required Attachments",
  specifications: "Specifications",
  ratingsAndReviews: "Ratings & Reviews",
  addReview: "Add a Review ->",
  customizable: "customizable",
  reviews: "Reviews",
};

export const CART_DATA = {
  title: "Your cart is empty",
  subtitle: "Add items to it now",
  button: "Shop now ->",
  deleiverTo: "Deliver to",
  addAddress: "Add Address",
  payment: "Price details",
  totalItems: "Total Items",
  totalAmount: "Total Amount",
  seller: "Seller:",
  size: "Size:",
  remove: "Remove",
  moveToWishlist: "Move to Wishlist",
  attachedFiles: "Attached Files :",
  placeOrder: "Place Order",
};

export const CONTACT_LINKS = {
  Facebook: "https://www.facebook.com/",
  Linkedin: "https://www.linkedin.com/",
  Instagram: "https://www.instagram.com/",
};

export const SIGN_UP_DATA = {
  title: "Sign Up",
  bottomContent: {
    upperText: {
      title: "Already have an account?",
      link: "Sign In",
      linkTo: "/login",
    },
    bottomText: {
      title: "By signing up you agree to Makeit's",
      link: "Terms of Service",
      link2: " Privacy Policy",
      linkTo: "/terms",
      linkTo2: "/privacy",
    },
  },
};

export const SIGN_IN_DATA = {
  title: "Login",
  bottomContent: {
    upperText: {
      title: "Don't have an account?",
      link: "Sign Up",
      linkTo: "/signup",
    },
    bottomText: {
      title: "By signing in you agree to Makeit's",
      link: "Terms of Service",
      link2: " Privacy Policy",
      linkTo: "/terms",
      linkTo2: "/privacy",
    },
  },
};

export const SECONDARY_FOOTER_DATA = {
  title: "Need help?",
  linkText: "Contact us ",
  linkTo: "/contact",
};

export const PROFILE_DATA = {
  images: {
    profileImg: profileImg,
  },
  logout: "Logout",
  links: [
    {
      title: "Personal Information",
      to: "/",
    },
    {
      title: "Dashboard",
      to: "/dashboard",
      onlySeller: true,
      colors: {
        primary: "var(--green-dark)",
        secondary: "var(--green-bg-light)",
      },
    },
    {
      title: "Products",
      to: "/products",
      onlySeller: true,
    },
    {
      title: "Orders",
      to: "/orders",
    },
    {
      title: "Wishlist",
      to: "/wishlist",
    },
    {
      title: "Become a Seller",
      to: "/become-a-seller",
      onlyUser: true,
      colors: {
        primary: "var(--yellow-primary)",
        secondary: "var(--yellow-bg)",
      },
    },
  ],
  personalInfoSec: {
    title: "Personal Information",

    feilds: [
      { key: "Name", value: "name" },
      { key: "Email", value: "email" },
      { key: "Phone Number", value: "mobile" },
      { key: "Shop Name", value: "shopName" },
      { key: "GST IN", value: "gstIn" },
      { key: "Pickup Address", value: "pickupAddress" },
    ],

    addresses: "Addresses",
    addAddress: "Add Address",
  },
  ordersSec: {
    orderPlaced: "Order Placed",
    total: "Total",
    id: "ID",
    seller: "Seller:",
    size: "Size:",
    attachedFiles: "Attached Files :",
  },
  wishlistSec: {
    remove: "Remove",
    reviews: "Reviews",
  },
};
