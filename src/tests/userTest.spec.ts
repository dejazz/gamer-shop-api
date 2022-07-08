import { DataSource, RepositoryNotTreeError } from "typeorm";
import app from "../app";
import { AppDataSource } from "../data-source";
import request from "supertest";

let testUser = {
  name: "Obrabo",
  email: "obrabo@brabao.com",
  password: "12345",
};
let loginUser = {
  email: "obrabo@brabao.com",
  password: "12345",
}

describe("Teste para o método POST em /users", () => {
  let connection: DataSource;


  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Teste de criação de usuário.", async () => {
    const response = await request(app).post("/users").send(testUser);
    expect(response.status).toEqual(201)
    expect(response.body.id.length).toEqual(36)
    expect(response.body).not.toHaveProperty("password")
    expect.objectContaining({
        id: response.body.id,
        name: testUser.name,
        email:testUser.email,
        cart: response.body.cart,
    })
  });
  it("Teste de criação de usuário com email já existente",async()=>{
    const response = await request(app).post("/users").send(testUser);

    expect(response.status).toEqual(409)
    expect(response.body).toHaveProperty("message")

  })
  it("Teste de criação de usuário sem passar nenhum dado",async()=>{
    const response  = await request(app).post("/users").send()
    expect(response.status).toEqual(400)
    expect(response.body).toHaveProperty("message")
  })
  it("Testando login de usuário",async()=>{
    const login = await request(app).post("/users/login").send(loginUser)

    expect(login.status).toEqual(201)
    expect(login.body).toHaveProperty("token")
    expect(typeof login.body.token).toBe("string");
  })
});

describe("Testando rota GET /users", () => {
  it("Testando listagem de usuários", async () => {
    const response1 = await request(app).post("/users").send(testUser);
    const login = await request(app).post("users/login").send(loginUser);
    const { token } = login.body;

    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

})


describe("Teste para o método DELETE em /users", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  
  
  it("Tentando deleção de um usuário", async () => {
    const response = await request(app).post("/users").send(testUser);
    const login = await request(app).post("/users/login").send(loginUser)
    const {token}=login.body

    const responseDelete = await request(app).delete(
      `/users/${response.body.id}`
    ).set("Authorization", `Bearer ${token}`);
  
    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toHaveProperty("message");
  });
})

