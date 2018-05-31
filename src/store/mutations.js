export const SET_FORM_BASE = "SET_FORM_BASE";
export const SET_SKILL = "SET_SKILL";

export default {
  [SET_FORM_BASE]: (state, obj) => {
    state.formBase = obj;
  },
  [SET_SKILL]: (state, obj) => {
    state.skill = obj;
  },
};
