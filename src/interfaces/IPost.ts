import { eContentType } from "../enums/EContentType";
import IUser from "./IUser";

export default interface IPost{
    id:string;
    user:IUser;
    description:string;
    content:eContentType.image
    url:string;
    tags:string[]
}