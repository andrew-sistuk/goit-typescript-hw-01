type genUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<genUser>>(initialValues: T): T {
  return initialValues;
  // Оновлення користувача
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
