const request = require("supertest");
const app = require("./index");

describe("GET /hello", () => {
  it("should return Hello World message", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Hello World!");
  });
});
