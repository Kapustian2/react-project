import { getUsers } from "./get-users";
import { sessions } from "./sessions";

const generateDate = () =>
  new Date(Math.random() * 1000000000000 + 1999999999999)
    .toISOString()
    .substring(0, 16)
    .replace("T", " ");

export const server = {

  async logout(session) {
    sessions.remove(session);
  },

  async authorize(authLogin, authPassword) {
    const users = await getUsers();

    const user = users.find(({ login }) => login === authLogin);

    if (!user) {
      return {
        error: "Такой пользователь не найден",
        response: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: "Неверный пароль",
        response: null,
      };
    }

    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user)
      }
    }

  },

  async register(regLogin, regPassword) {
    const users = fetch("http://localhost:3005/users").then((loadedUsers) =>
      loadedUsers.json()
    );
    const user = users.find(({ login }) => login === regLogin);

    if (!user) {
      return {
        error: "Такой пользователь уже есть",
        response: null,
      };
    }

    await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        login: regLogin,
        password: regPassword,
        registed_at: generateDate,
        role_id: "2",
      }),
    });



    return {
      error: null,
      response: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user)
      }
  }}}
