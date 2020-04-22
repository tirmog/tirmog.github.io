import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const getDefaultState = () => {
  return {
    KL: 1,
    warp: 0,
    hide_five_star_pets: 0,
    hide_unattainable_pets: 0,
    edit_priorities: 0,
    refills: 0,
    refills_hard: 0,
    tickets: 10,
    tickets_hard: 5,
  };
};

const state = getDefaultState();

const namespaced = true;

export const stats = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default getDefaultState;