import IPost from "../../../../interfaces/IPost";
import { IContextAction } from "../../../../interfaces/IContextAction";
import { ePostActionType } from "../types/postActionTypes";

export const postReducer = (
  state: IPost[],
  action: IContextAction<ePostActionType, IPost>
): IPost[] => {
  switch (action.type) {
    case ePostActionType.SET_POST:
      return [...state, action.payload];
    case ePostActionType.DELETE_POST:
      return [...state.filter((post) => post.id != action.payload.id)];
    default:
      return state;
  }
};
