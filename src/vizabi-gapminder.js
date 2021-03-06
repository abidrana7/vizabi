/*!
 * VIZABI GAPMINDER PREFERENCES (included only in Gapminder build)
 */

import "babel-polyfill";
import globals from "base/globals";
import * as utils from "base/utils";
import Tool from "base/tool";
import Vzb from "vizabi";
import "assets/styles/vizabi.scss";
import requireAll from "helpers/requireAll";

// import tools
import BarChart from "tools/barchart/barchart";
import BubbleMap from "tools/bubblemap/bubblemap";
import LBubbleMap from "tools/lbubblemap/bubblemap";
import DonutChart from "tools/donutchart/donutchart";
import AxisLabeler from "tools/axislabeler/axislabeler";

// Fallback in case if WS is not available - requesting data from local files
const locationArray = window.location.href.split("/");
const localUrl = locationArray.splice(0, locationArray.indexOf("preview")).join("/") + "/preview/";

globals.ext_resources = utils.deepExtend({
  host: localUrl,
  preloadPath: "data/",
  dataPath: "data/waffles/"
}, globals.ext_resources);

export default Vzb;
module.exports = Vzb;
