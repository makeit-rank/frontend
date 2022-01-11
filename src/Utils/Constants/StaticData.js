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
      { key: "Shop Name", value: "shop_name" },
      { key: "GST IN", value: "gst_id" },
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
  becomeASellerSec: {
    title: "Become a Seller",
    feilds: [
      { label: "Shop Name", id: "ShopName", placeholder: "Enter Shop Name" },
      { label: "Your GSTIN", id: "GstIn", placeholder: "Enter GSTIN" },
      {
        label: "Pickup Address",

        subFeilds: [
          {
            id: "PickupAddress",
            placeholder: "Enter Pickup Address",
          },
          {
            id: "PickupPincode",
            placeholder: "Enter Pickup Pincode",
            type: "number",
          },
        ],
      },
    ],
    tnc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis urna tortor, mollis morbi bibendum vitae. Convallis suspendisse tempus pulvinar lacinia porttitor eget felis. Purus nibh malesuada facilisi ac et donec vivamus. Velit urna, tristique enim lacus, cursus morbi consequat nisl. Eget quam morbi molestie aliquam ac faucibus felis arcu, tempor. A est neque sollicitudin aliquet in dui integer. Sed a morbi ultricies vestibulum diam.",
    registerAsASeller: "Register as a Seller ->",
  },
  dashboardSec: {
    orderPlaced: "Order Placed",
    total: "Total",
    status: "Status",
    size: "Size:",
    attachedFiles: "Attached Files :",
    ordersReceived: "Orders Received",
    highlights: ["Total Orders", "This Month Earnings", "Total Earnings"],
  },
  productsSec: {
    title: "Your Products",
    addNewProduct: "Add New Product",
    reviews: "Reviews",
  },
};

export const ADD_ADDRESS_POPUP_DATA = {
  title: "Add Address",
  placeholders: {
    address: "Enter Address",
    pincode: "Enter Pincode",
  },
  button: {
    addAddress: "Add Address ->",
  },
};

export const ADD_PRODUCT_POPUP_DATA = {
  title: "Add product",
  feilds: {
    title: {
      label: "Title:",
      placeholder: "Enter Title",
    },
    price: {
      label: "Price:",
      placeholder: "Enter Price",
    },
  },
  images: "Images :",
  addImage: "Add Image",
  specifications: "Specifications",
  addSpecificationItem: "Add Specification Item",
  specificationsPlaceholders: {
    key: "Enter Name",
    value: "Enter Value",
  },
  variousSizes: "Does this product have various sizes?",
  availableSizes: "Available Sizes :",
  addSizeVarient: "Add Size Varient",
  customisable: "Is this product customizable?",
  requiredAttachments: "Required Attachments :",
  addAttachmentInfo: "Add Attachment Info",
  customisePlaceholders: {
    title: "Attachment Title",
    description: "Attachment Description",
  },
  addProduct: "Add Product ->",
  discard: "Discard",
};

export const ORDER_DETAILS_DATA = {
  title: "Order Details",
  total: "Total",
  id: "ID",
  seller: "Seller:",
  size: "Size:",
  attachedFiles: "Attached Files :",
  deliveryAddress: "Delivery Address",
  orderPlaced: "Order Placed",
  status: "Status",
  statusData: {
    userPerspective: {
      titles: {
        Ordered: "Ordered",
        Confirmed: "Order confirmed by seller",
        AskedForApprove: "Seller Uploaded designs for approval",
        AskedForChange: "Asked for change",
        ApproveDesign: "Approve Designs",
        ApprovedDesigns: "You approved designs",
        Delivered: "Delivered",
      },
      approve: "Approve ->",
      suggestChange: "Suggest some changes",
      askForChanges: "Ask for changes ->",
    },
    sellerPerspective: {
      titles: {
        Ordered: "Ordered",
        Confirm: "Confirm Order",
        Confirmed: "You confirmed order",
        AskForApprove: "Upload custom designs for approval ",
        AskedForApprove: "You Uploaded designs for approval",
        AskedForChange: "Customer Asked for change",
        ApprovedDesigns: "Customer approved designs",
        Delivered: "Delivered",
      },
      approve: "Approve ->",
      addImage: "Add Image",
      submit: "Submit ->",
    },
  },
};
