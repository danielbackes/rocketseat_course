import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diego@rocketseat.com.br',
    password: '123456',
    techs: [
      'NodeJS',
      'ReactJS', 
      { title: 'React Native', experience: 90 }
    ],
  });

  return response.json({ message: 'Hello World' });
}