import HighlightsItemSec from "./HighlightsItemSec";
import styles from "./HomeMainSec.module.css";
import UpperSec from "./UpperSec";
import { HOME_DATA } from "./../../Utils/Constants/StaticData";
import Footer from "./../Footer/Footer";

const tempData = Array(5)
  .fill({})
  .map((_, index) => ({
    id: index,
    title: `Printed Men Hooded Neck Da..`,
    seller: `Blive  enterprise ${index + 1}`,
    price: Math.floor(Math.random() * 500) + 500,
    rating:
      Math.floor(Math.random() * 3) + 1 + Math.floor(Math.random() * 10) / 10,
    noOfRatings: Math.floor(Math.random() * 100) + 100,
    image: `https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
  }));

function HomeMainSec({ recommendedItems = tempData, topPickItems = tempData }) {
  return (
    <div className={styles.Wrapper}>
      <UpperSec />
      <HighlightsItemSec
        items={recommendedItems.slice(0, 4)}
        redirectTo={"/recommended"}
        title={HOME_DATA.recommended}
      />
      <HighlightsItemSec
        items={topPickItems.slice(0, 4)}
        redirectTo={"/top-pick"}
        title={HOME_DATA.topPicks}
      />
      <Footer />
    </div>
  );
}

export default HomeMainSec;
