import { createStore } from "vuex";
import user from "../store/modules/user"
import admin from "../store/modules/admin"
const store = createStore({
    modules: {
        user,
        admin,
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    /*    plugins: [
            createPersistedState({
                paths: ['checkup'],
            })
        ]*/
});

export default store