const MOCK_TASKS = [
  {
    id: 1,
    taskId: 'qwedcvbg4ty5sqkrtughfnstyu10',
    title: 'Develop the production schema',
    targetDate: new Date(),
    isFinished: true,
    users: [
      {
        id: 1,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu01',
        email: 'vasya@gmail.com',
        userName: 'Vasya',
        lastName: 'Pupkin',
      },
      {
        id: 2,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu02',
        email: 'petrov@gmail.com',
        userName: 'Petr',
        lastName: 'Petrov',
      },
    ],
    allUsersInTheOrganization: [
      {
        id: 1,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu01',
        email: 'vasya@gmail.com',
        userName: 'Vasya',
        lastName: 'Pupkin',
      },
      {
        id: 2,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu02',
        email: 'petrov@gmail.com',
        userName: 'Petr',
        lastName: 'Petrov',
      },
      {
        id: 3,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu03',
        email: 'svetikova@gmail.com',
        userName: 'Sveta',
        lastName: 'Sveikova',
      },
      {
        id: 4,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu04',
        email: 'ivanov@gmail.com',
        userName: 'Ivan',
        lastName: 'Ivanov',
      },
    ],
  },
  {
    id: 2,
    taskId: 'qwedcvbg4ty5sqkrtughfnstyu20',
    title: 'Conduct the presentation for the customers',
    targetDate: new Date(),
    isFinished: false,
    users: [
      {
        id: 3,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu03',
        email: 'svetikova@gmail.com',
        userName: 'Sveta',
        lastName: 'Sveikova',
      },
      {
        id: 4,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu04',
        email: 'ivanov@gmail.com',
        userName: 'Ivan',
        lastName: 'Ivanov',
      },
    ],
    allUsersInTheOrganization: [
      {
        id: 1,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu01',
        email: 'vasya@gmail.com',
        userName: 'Vasya',
        lastName: 'Pupkin',
      },
      {
        id: 2,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu02',
        email: 'petrov@gmail.com',
        userName: 'Petr',
        lastName: 'Petrov',
      },
      {
        id: 3,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu03',
        email: 'svetikova@gmail.com',
        userName: 'Sveta',
        lastName: 'Sveikova',
      },
      {
        id: 4,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu04',
        email: 'ivanov@gmail.com',
        userName: 'Ivan',
        lastName: 'Ivanov',
      },
    ],
  },
  {
    id: 3,
    taskId: 'qwedcvbg4ty5sqkrtughfnstyu30',
    title: 'Sing up the papers',
    targetDate: new Date(),
    isFinished: false,
    users: [
      {
        id: 1,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu01',
        email: 'vasya@gmail.com',
        userName: 'Vasya',
        lastName: 'Pupkin',
      },
      {
        id: 4,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu04',
        email: 'ivanov@gmail.com',
        userName: 'Ivan',
        lastName: 'Ivanov',
      },
    ],
    allUsersInTheOrganization: [
      {
        id: 1,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu01',
        email: 'vasya@gmail.com',
        userName: 'Vasya',
        lastName: 'Pupkin',
      },
      {
        id: 2,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu02',
        email: 'petrov@gmail.com',
        userName: 'Petr',
        lastName: 'Petrov',
      },
      {
        id: 3,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu03',
        email: 'svetikova@gmail.com',
        userName: 'Sveta',
        lastName: 'Sveikova',
      },
      {
        id: 4,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu04',
        email: 'ivanov@gmail.com',
        userName: 'Ivan',
        lastName: 'Ivanov',
      },
    ],
  },
  {
    id: 4,
    taskId: 'qwedcvbg4ty5sqkrtughfnstyu40',
    title: 'Write the technical documentation',
    targetDate: new Date(),
    isFinished: true,
    users: [
      {
        id: 2,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu02',
        email: 'petrov@gmail.com',
        userName: 'Petr',
        lastName: 'Petrov',
      },
      {
        id: 3,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu03',
        email: 'svetikova@gmail.com',
        userName: 'Sveta',
        lastName: 'Sveikova',
      },
    ],
    allUsersInTheOrganization: [
      {
        id: 1,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu01',
        email: 'vasya@gmail.com',
        userName: 'Vasya',
        lastName: 'Pupkin',
      },
      {
        id: 2,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu02',
        email: 'petrov@gmail.com',
        userName: 'Petr',
        lastName: 'Petrov',
      },
      {
        id: 3,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu03',
        email: 'svetikova@gmail.com',
        userName: 'Sveta',
        lastName: 'Sveikova',
      },
      {
        id: 4,
        userId: 'qwedcvbg4ty5sqkrtughfnstyu04',
        email: 'ivanov@gmail.com',
        userName: 'Ivan',
        lastName: 'Ivanov',
      },
    ],
  },
];

export default MOCK_TASKS;
