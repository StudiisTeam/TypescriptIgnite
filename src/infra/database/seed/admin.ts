import { hash } from "bcrypt";
import { v4 } from "uuid";
import createConnection from "../index";

async function create() {
  const id = v4();
  const password = await hash("admin", 8);

  const connection = await createConnection("localhost");

  await connection.query(
    `
      INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'XXX-XXX')
    `
  );

  await connection.close;
}

create().then(() => console.log("User admin created!!"));
