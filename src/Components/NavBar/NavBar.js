import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./NavBar.module.css";

import { NAVBAR_DATA } from "../../Utils/Constants/StaticData";
import { getCityFromPincode } from "./../../Services/location.service";

function NavBar({ isLoggedIn }) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userReducer.userData);

  const searchInputRef = useRef(null);

  const [locationInfo, setLocationInfo] = useState({
    city: "",
    pincode: "",
  });

  useEffect(() => {
    searchInputRef.current.value = searchParams.get("search");
  }, [searchParams]);

  useEffect(async () => {
    let pincode = userData?.addresses?.[0]?.pincode || "394107";
    try {
      const cityInfo = await getCityFromPincode(pincode);
      if (cityInfo) {
        setLocationInfo({
          city: cityInfo,
          pincode,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [userData]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSec}>
        <Link to="/" className={styles.LogoLink}>
          <img
            src={NAVBAR_DATA.images.LOGO_IMG}
            alt=""
            className={styles.Logo}
          />
        </Link>
        <div className={styles.LocationInfo}>
          <div className={styles.LocationPin}>
            <img
              src={NAVBAR_DATA.images.LOCATION_PIN}
              alt=""
              className={styles.LocationPinImg}
            />
          </div>
          <div className={styles.LocationInfoRight}>
            <h4 className={styles.DeliverToTitle}>{NAVBAR_DATA.deleiverTo}</h4>
            <div className={styles.LocationInfoRightBottom}>
              <h3 className={styles.DeliverToPincode}>
                {locationInfo.pincode}
              </h3>
              <h3 className={styles.DeliverToArea}>{locationInfo.city}</h3>
            </div>
          </div>
        </div>
      </div>
      <form
        className={styles.SearchBar}
        onClick={(e) => {
          searchInputRef.current.focus();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (searchInputRef.current.value.length > 0) {
            navigate(`/search?search=${searchInputRef.current.value}`);
          }
        }}
      >
        <div className={styles.SearchIconWrapper}>
          <img
            src={NAVBAR_DATA.images.SEARCH_ICON_IMG}
            alt=""
            className={styles.SearchBarImg}
          />
        </div>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for products"
          className={styles.SearchBarInput}
          title="Search for products"
          name="search"
        />
      </form>
      <div className={styles.RightSec}>
        {isLoggedIn ? (
          location.pathname !== "/profile" && (
            <Link
              to="/profile"
              className={styles.ProfileButton + " " + styles.LinkButton}
            >
              <img
                src={NAVBAR_DATA.images.PROFILE_IMG}
                alt=""
                className={
                  styles.ProfileButtonImg + " " + styles.LinkButtonIcon
                }
              />
              <h4
                className={
                  styles.ProfileButtonText + " " + styles.LinkButtonText
                }
              >
                {NAVBAR_DATA.profie}
              </h4>
            </Link>
          )
        ) : (
          <Link to="/login" className={styles.LoginButton}>
            <h4 className={styles.LoginButtonText}>{NAVBAR_DATA.login}</h4>
          </Link>
        )}
        {location.pathname !== "/cart" && (
          <Link
            to="/cart"
            className={styles.CartButton + " " + styles.LinkButton}
          >
            <img
              src={NAVBAR_DATA.images.CART_IMG}
              alt=""
              className={styles.CartButtonImg + " " + styles.LinkButtonIcon}
            />
            <h4 className={styles.CartButtonText + " " + styles.LinkButtonText}>
              {NAVBAR_DATA.cart}
            </h4>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
