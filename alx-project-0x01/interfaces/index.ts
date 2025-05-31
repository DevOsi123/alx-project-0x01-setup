export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// The UserProps interface expects a single `user` of type User
export interface UserProps {
  user: User;
}
