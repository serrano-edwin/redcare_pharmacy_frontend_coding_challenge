import { Dispatch } from "redux";
import { api, AxiosResponse } from "../../../../utils/api";
import {
  repositoriesLoading,
  repositoriesSuccess,
  repositoriesError,
} from "../actions/actions";

const getRepositories =
  ({ created = "2017-01-10", sort = "stars", order = "desc" }) =>
  async (dispatch: Dispatch) => {
    dispatch(repositoriesLoading());
    try {
      const response: AxiosResponse = await api.get(
        `https://api.github.com/search/repositories?q=created:${created}&sort=${sort}&order=${order}`
      );
      dispatch(repositoriesSuccess(response.data));
    } catch (error) {
      dispatch(repositoriesError());
    }
  };

export { getRepositories };
