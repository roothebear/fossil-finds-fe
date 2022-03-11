import FindsList from "../collections/FindsList";
import FindsIcons from "../collections/FindsIcons";
import FindsMap from "../collections/FindsMap";

export default function CollectionContainer({finds, displayType, togglePopUp}) {
  console.log("display object: ", displayType)
  if (displayType === "list") {
    return <FindsList finds={finds} />;
  } else if (displayType === "map") {
    return <FindsMap finds={finds} togglePopUp={togglePopUp} />;
  } else {
    return <FindsIcons finds={finds} />;
  }
}
