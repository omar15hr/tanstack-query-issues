import { sleep } from "../../helpers/sleep";
import { githubApi } from "../../api/github.api";
import { GithubLabel } from "../interfaces/label.interface";

export const getLabels = async():Promise<GithubLabel[]> => {
  await sleep(1500);
  
  const { data } = await githubApi.get<GithubLabel[]>('/labels');

  return data;
}