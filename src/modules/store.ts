import { createStore } from "vuex";

import homeStore from "./home/store";

export default createStore({
  modules: { homeStore },
});
