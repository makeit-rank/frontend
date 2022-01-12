import HighlightsItemSec from "./HighlightsItemSec";
import styles from "./HomeMainSec.module.css";
import UpperSec from "./UpperSec";
import { HOME_DATA } from "./../../Utils/Constants/StaticData";
import Preloader from "./../Preloader/Preloader";

function HomeMainSec({ recommendedItems, topPickItems }) {
  return (
    <div className={styles.Wrapper}>
      <UpperSec />
      {topPickItems ? (
        <>
          {/* <HighlightsItemSec
            items={recommendedItems.slice(0, 4)}
            redirectTo={"/recommended"}
            title={HOME_DATA.recommended}
          /> */}
          <HighlightsItemSec
            items={topPickItems.slice(0, 4)}
            redirectTo={`search?search=top-pick`}
            title={HOME_DATA.topPicks}
          />
        </>
      ) : (
        <Preloader transperant />
      )}
    </div>
  );
}

export default HomeMainSec;
