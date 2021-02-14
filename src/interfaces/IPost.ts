import { eContentType } from "../enums/EContentType";
import IChannel from "./IChannel";
import IUser from "./IUser";

export default interface IPost{
    id:string;
    user:IUser;
    channel:IChannel;
    description:string;
    content:eContentType.video
    url:string;
}