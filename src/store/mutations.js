export const SET_INFO_BASE = "SET_INFO_BASE";
export const SET_SKILL = "SET_SKILL";

export default {
  [SET_INFO_BASE]: (state, obj) => {
    state.infoBase = obj;
  },
  [SET_SKILL]: (state, obj) => {
    state.skill = obj;
  },
};
