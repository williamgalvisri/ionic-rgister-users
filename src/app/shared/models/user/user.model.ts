export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  constructor(item?: User) {
    this.id = item.id ?? 0;
    this.email = item.email ?? '';
    this.firstName = item.firstName ?? '';
    this.lastName = item.lastName ?? '';
    this.avatar = item.avatar ?? '';
  }
}
