import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import user from "../store/modules/user"
import admin from "../store/modules/admin"
import bedasgn from "../store/modules/bedasgn";
import patnt from "../store/modules/patnt";
import severity from "@/store/modules/severity";
import common from "@/store/modules/common";

const store = createStore({
    modules: {
        user,
        admin,
        bedasgn,
        patnt,
        severity,
        common
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