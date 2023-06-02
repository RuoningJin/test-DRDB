import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    name: null,
    userID: null,
    lab: null,
    studies: null,
    studyNames: [],
    isUserLoggedIn: false,
    role: null,
    labEmail: null,
    labName: null,
    labEmailStatus: null,
    adminEmailStatus: null,
    loadingStatus: false,
    // ip: null,
    emailOpening: null,
    emailClosing: null,
    tyEmailClosing: null,
    location: null,
    transportationInstructions: null,
    ZoomLink: null,
    trainingMode: false,
    timeZone: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setName(state, name) {
      state.name = name;
    },
    setUserID(state, userID) {
      state.userID = userID;
    },
    setLab(state, lab) {
      state.lab = lab;
    },
    setStudies(state, studies) {
      state.studies = studies;
    },

    setStudyName(state, studyName) {
      state.studyNames = [...studyName];
    },
    addStudyName(state, studyName) {
      const index = state.studyNames.indexOf(studyName);
      if (index === -1 && studyName) {
        state.studyNames.push(studyName);
      }
    },
    removeStudyName(state, studyName) {
      console.log(studyName);
      // const index = state.studyNames.indexOf(studyName);
      // if (index !== -1) {
      //   state.studyNames.splice(index, 1);
      // }
    },

    setLabEmail(state, labEmail) {
      state.labEmail = labEmail;
    },
    setLabName(state, labName) {
      state.labName = labName;
    },
    setRole(state, role) {
      state.role = role;
    },
    setLabEmailStatus(state, labEmailStatus) {
      state.labEmailStatus = labEmailStatus;
    },
    setAdminEmailStatus(state, adminEmailStatus) {
      state.adminEmailStatus = adminEmailStatus;
    },
    setLoadingStatus(state, loadingStatus) {
      state.loadingStatus = loadingStatus;
    },
    // setIP(state, ip) {
    //   state.ip = ip;
    // },
    setEmailOpening(state, emailOpening) {
      state.emailOpening = emailOpening;
    },
    setEmailClosing(state, emailClosing) {
      state.emailClosing = emailClosing;
    },
    setTYEmailClosing(state, tyEmailClosing) {
      state.tyEmailClosing = tyEmailClosing;
    },
    setLocation(state, location) {
      state.location = location;
    },
    setTransportationInstructions(state, transportationInstructions) {
      state.transportationInstructions = transportationInstructions;
    },
    setZoomLink(state, ZoomLink) {
      state.ZoomLink = ZoomLink;
    },
    setTrainingMode(state, trainingMode) {
      state.trainingMode = trainingMode;
    },
    setTimeZone(state, timeZone) {
      state.timeZone = timeZone;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setName({ commit }, name) {
      commit("setName", name);
    },
    setUserID({ commit }, userID) {
      commit("setUserID", userID);
    },
    setLab({ commit }, lab) {
      commit("setLab", lab);
    },
    setStudies({ commit }, studies) {
      commit("setStudies", studies);
    },

    setStudyName({ commit }, studyName) {
      commit("setStudyName", studyName);
    },
    addStudyName({ commit }, studyName) {
      commit("addStudyName", studyName);
    },
    removeStudyName({ commit }, studyName) {
      commit("removeStudyName", studyName);
    },

    setLabEmail({ commit }, labEmail) {
      commit("setLabEmail", labEmail);
    },
    setLabName({ commit }, labName) {
      commit("setLabName", labName);
    },
    setRole({ commit }, role) {
      commit("setRole", role);
    },
    setLabEmailStatus({ commit }, labEmailStatus) {
      commit("setLabEmailStatus", labEmailStatus);
    },
    setAdminEmailStatus({ commit }, adminEmailStatus) {
      commit("setAdminEmailStatus", adminEmailStatus);
    },
    setLoadingStatus({ commit }, loadingStatus) {
      commit("setLoadingStatus", loadingStatus);
    },
    // setIP({ commit }, ip) {
    //   commit("setIP", ip);
    // },
    setEmailOpening({ commit }, emailOpening) {
      commit("setEmailOpening", emailOpening);
    },
    setEmailClosing({ commit }, emailClosing) {
      commit("setEmailClosing", emailClosing);
    },
    setTYEmailClosing({ commit }, tyEmailClosing) {
      commit("setTYEmailClosing", tyEmailClosing);
    },
    setLocation({ commit }, location) {
      commit("setLocation", location);
    },
    setTransportationInstructions({ commit }, transportationInstructions) {
      commit("setTransportationInstructions", transportationInstructions);
    },
    setZoomLink({ commit }, ZoomLink) {
      commit("setZoomLink", ZoomLink);
    },
    setTrainingMode({ commit }, trainingMode) {
      commit("setTrainingMode", trainingMode);
    },
    setTimeZone({ commit }, timeZone) {
      commit("setTimeZone", timeZone);
    },
  },
});
