import { ePostActionType } from "../store/reducers/postReducer/types/postActionTypes";
import { IContextAction } from "./IContextAction";
import IPost from "./IPost";

export interface ICombinedActions {
  setNewPostAction: IContextAction<ePostActionType.SET_POST, IPost>
}
