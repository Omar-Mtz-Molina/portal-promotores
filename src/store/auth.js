import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    role: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
    role(state) {
      return state.role;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      //localStorage.setItem("email", credentials.email);
      let response = await axios.post("auth/login", credentials, {
        /*headers: {
          id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOnsiaWQiOiIkMmIkMTUkc2MxRXZHajVqL2tuNGV2Q21oUkl5Ty8yd0UxZ29QUm5HREJqc2lSb2I5RHQzQzZCQ1pwMHUiLCJuYW1lIjoiQWRtaW4iLCJhZGRyZXNzIjoiTcOpeGljbyJ9LCJpYXQiOjE1OTMxODMxMTAsImV4cCI6MTU5NTc3NTExMH0.g1v27O31PqoFSvC8gLNbP1ZOxxUg6kzNQItBqDTznx0",
          key: "$2b$10$gHAtQp/D9j1jMSxzNdmiU.G41.U3geU1HBCXRNF2O7xiXsSPFVv9y",
        },*/
      });
      return dispatch("attempt", response.data.access_token);
    },
    async attempt({ commit, state }, token) {
      //let email = localStorage.getItem("email");
      if (token) {
        commit("SET_TOKEN", token);
        //console.log(token);
      }
      if (!state.token) {
        return;
      }
      try {
        let response = await axios.post("auth/getInfo",{
          /*headers: {
            Authorization: 'Bearer '+ token,
          }*/
        });
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("id", response.data.id);
        }
        commit("SET_USER", response.data);
        commit("SET_ROLE", response.data.role);
      } catch (e) {
        commit("SET_TOKEN", null);
        localStorage.removeItem("token");
      }
    },
    signOut({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    },
  },
};
