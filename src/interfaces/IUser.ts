export default interface IUser {
  id: string;
  nickname: string;
  name: string;
  surname: string;
  email: string;
  avatar: string;
  coords: GeolocationCoordinates;
  phone: string;
  countryISOCode: string;
  isEmailVerified: boolean;
}
