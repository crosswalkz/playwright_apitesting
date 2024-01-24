const { test, expect } = require("@playwright/test");

test('Home Page', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')

    const page_title = page.title()
    console.log(page_title);

    await expect(page).toHaveTitle('STORE')

    await expect(page).toHaveURL('https://demoblaze.com/index.html')

    await page.close()



  });

