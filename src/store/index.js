import Vue from 'vue'
import Vuex from 'vuex'
if(process.env.NODE_ENV === "development"){
    Vue.use(Vuex)
}

import user from './modules/user'
import permission from './modules/permission'
import menu from './modules/menu'
import muban from "./modules/muban";
import form from "./modules/form";
import people from "./modules/people";
import ceping from "./modules/ceping";

export default new Vuex.Store({
    modules: {
        user,
        permission,
        menu,
        muban,
        form,
        people,
        ceping
    }
});

