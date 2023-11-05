const state = {
    user: null,
    token: null,
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        state.token = token;
    },
    clearUser(state) {
        state.user = null;
    },
    clearToken(state) {
        state.token = null;
    },
};

const actions = {
    login({ commit }, { user, token }) {
        commit('setUser', user);
        commit('setToken', token);
    },
    logout({ commit }) {
        commit('clearUser');
        commit('clearToken');
    },
};

const getters = {
    isLoggendIn(state) {
        return state.user !== null && state.token !== null;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
}