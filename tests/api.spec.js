const { test, expect } = require("@playwright/test");

const baseurl = "https://reqres.in/api";

test.describe.parallel("Api Testing ", async () => {
  test("Simple API-Testing- Assert Response Status ", async ({ request }) => {
    const response = await request.get(`${baseurl}/users/2`);
    expect(response.status()).toBe(200);

    const repsonse_body = JSON.parse(await response.text());
    // console.log(repsonse_body)
  });

  test("Simple API-Testing - Assert Invalid Endpoints ", async ({
    request,
  }) => {
    const response = await request.get(`${baseurl}/users/random-endpint`);
    expect(response.status()).toBe(404);
  });

  test("GET request - Get user detail", async ({ request }) => {
    const response = await request.get(`${baseurl}/users/1`);
    const repsonse_body = JSON.parse(await response.text());
    console.log(repsonse_body);
    expect(response.status()).toBe(200);
    expect(repsonse_body.data.id).toBe(1);
    expect(repsonse_body.data.first_name).toBe("George");
    expect(repsonse_body.data.last_name).toBeTruthy();
  });

  test("POST - Create New User", async ({ request }) => {
    const response = await request.post(`${baseurl}/users`, {
      data: {
        id: 1000,
      },
    });

    const repsonse_body = JSON.parse(await response.text());
    console.log(repsonse_body);
    expect(response.status()).toBe(201);
    expect(repsonse_body.id).toBe(1000);
    expect(repsonse_body.createdAt).toBeTruthy();
  });

  test("POST- Login", async ({ request }) => {
    const response = await request.post(`${baseurl}/login`, {
      data: {
        email: "george.bluth@reqres.in",
        password: "citysli",
      },
    });

    const repsonse_body = JSON.parse(await response.text());
    console.log(repsonse_body);
    expect(response.status()).toBe(200);
    expect(repsonse_body.token).toBeTruthy();
  });

  test("PUT - Edit user", async ({ request }) => {
    const response = await request.put(`${baseurl}/users/2`, {
      data: {
        name: "akshay",
        job: "SDE",
      },
    });;

    const repsonse_body = JSON.parse(await response.text());
    console.log(repsonse_body);
    expect(response.status()).toBe(200);
    expect(repsonse_body.name).toBe('akshay')
    expect(repsonse_body.job).toBe('SDE')
  });

  test('DELETE - Remove User' , async({request})=>{
    const response = await request.delete(`${baseurl}/users/2`)
    console.log(response.status())
    expect(response.status()).toBe(204)
  })
});



test.describe.parallel("Api Testing ", async () => {});
