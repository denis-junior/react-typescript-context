import React, {FC} from 'react';
import { IPerson } from '../interface';
import { person } from './types';

interface IPersonProps {
name: string
age: number
person: person
}

export const Person: FC<IPersonProps> = ({name, age, person}) => {

return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h2>object below</h2>
        <h1>Name: {person.name}</h1>
        <h1>Age: {person.age}</h1>
    </div>
  );
}
