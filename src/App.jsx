import React, { useState } from 'react';
import './App.css';
import Table from './Table';
/* import UsersData from './users.json'; */

function App() {

/*   const usersArray = [];

  Object.keys(UsersData).map(key => {
    usersArray.push(UsersData[key]);
  }); */

  const [users, setUsers] = useState(() =>[
    {
    "name": "Ahmet",
    "surname": "İlker",
    "email": "ahmetilker@hotmail.com",
    "age": 23
    },
    {
    "name": "Pelin",
    "surname": "Taşkın",
    "email": "pelintaskin@hotmail.com",
    "age": 40
    },
    {
    "name": "Mehmet",
    "surname": "Türk",
    "email": "mehmetturk@hotmail.com",
    "age": 47
    },
    {
    "name": "Ayşe",
    "surname": "Yağız",
    "email": "ayseyagiz@hotmail.com",
    "age": 19
    }
]);

  return (
    <>
    <div className='p-4'>
    <Table 
      searchable={true}
      head={[
             {name: 'Ad-Soyad', sortable: true},
             {email: 'E-posta'},
             {age: 'Yaş', width: 200, sortable: true},
             {processes: 'İşlemler', width: 100}
            ]}
      body={users && users.map((user, key) => ([
       `${user.name} ${user.surname}`,
        user.email,
        user.age,
        [
          <button className='h-8 px-4 flex items-center justify-center rounded bg-blue-600 text-white mb-2'>Düzenle</button>,
          <button 
          onClick={() => {
            /* usersArray.map((userArray, key) => {
            const tmpUsers = [...users];
            tmpUsers.splice(userArray, 1);
            setUsers(tmpUsers);
            }) */
            const tmpUsers = [...users];
            tmpUsers.splice(key, 1);
            setUsers(tmpUsers);
          }}
          className='h-8 px-4 flex items-center justify-center rounded bg-red-600 text-white'>Sil</button>
        ]                   
      ]))}
    />
    </div>
    </>
  )
}

export default App;
