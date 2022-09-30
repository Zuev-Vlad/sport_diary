import { userAtom } from "./../../state/user/user";
import { useRecoilValue } from "recoil";
import { CustomFetch } from "../../utils/request/CustomFetch";
import { API_PATH } from "../../utils/api/apiPath";

export class UserModel {
  state = useRecoilValue(userAtom);
  private myFetch = new CustomFetch();

  async getUsers() {
    const resp = await this.myFetch.GET(API_PATH.users);
    return await resp.json();
  }
}
