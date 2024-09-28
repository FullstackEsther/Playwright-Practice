import { test, expect } from '@playwright/test';

test("Verify Login Details", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator("id=username").click();
    await page.locator("id=username").fill("tomsmith");
    await page.locator("id=password").click();
    await page.locator("id=password").fill("SuperSecretPassword!");
    await page.getByRole("button",{type: "submit"}).click();
    await expect(page.getByText("Welcome to the Secure Area. When you are done click logout below.")).toBeVisible();
    await expect(page.locator("//a[@class = 'button secondary radius'] //i[contains(text(),'Logout')]")).toBeVisible();
} )