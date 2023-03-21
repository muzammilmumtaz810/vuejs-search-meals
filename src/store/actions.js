import axiosClient from "../axiosClient";
export function searchMeals({ commit }, keywork) {
  axiosClient.get(`search.php?s=${keywork}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
export function searchmealsbyLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setmealsbyLetter", data.meals);
  });
}
export function searchmealsbyIngredients({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setmealsbyIngredients", data.meals);
  });
}
