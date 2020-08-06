import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const userArray = [
      {
        username: "Dave@test",
        password: "password123",
        level: "full",
      },
      {
        username: "Joel@test",
        password: "SummerTime64",
        level: "full",
      },
      {
        username: "Kat@reduced",
        password: "Qwerty9009",
        level: "reduced",
      },
      {
        username: "Ben@reduced",
        password: "JuniperB3rri3s",
        level: "reduced",
      },
      {
        username: "Tom@restrict",
        password: "1234DDFhLm",
        level: "restricted",
      },
      {
        username: "Ann@restrict",
        password: "SomeRand0mPassw0rd",
        level: "restricted",
      },
    ];
    userArray.forEach(async (user) => {
      let databaseUser = new User();
      databaseUser.userName = user.username;
      databaseUser.password = user.password;
      databaseUser.level = user.level;
      await connection.manager.save(databaseUser);
      console.log("Saved a new user with id: " + databaseUser.id);
      console.log("Loading users from the database...");
      const users = await connection.manager.find(User);
      console.log("Loaded users: ", users);
    });

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
