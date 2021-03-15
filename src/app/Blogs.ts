export class Blogs {
  id: number;
  username: string;
  name: string;
  email: string;
  body: string;

  constructor(id, username, name, email, body) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.body = body;
  }
}
