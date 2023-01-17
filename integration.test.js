import assert from 'node:assert';
import supertest from "supertest";
import { app } from "./index.js";


const server = supertest(app);
const response = await server.get("/users");
console.log(response.status)
assert(response.status === 200, 'Deve retornar status 200')
