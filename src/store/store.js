import { createStore } from "vuex";
import user from "../store/modules/user"
const store = createStore({
    modules: {
        user,
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