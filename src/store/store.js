import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import user from "../store/modules/user"
import admin from "../store/modules/admin"
import bedasgn from "../store/modules/bedasgn";
const store = createStore({
    modules: {
        user,
        admin,
        bedasgn,
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
        plugins: [
            createPersistedState({
                paths: ['user'],
            })
        ]
});

export default store