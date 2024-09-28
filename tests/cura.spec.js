
import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByLabel('Apply for hospital readmission').check();
  await page.getByLabel('Medicaid').check();
  await page.getByPlaceholder('dd/mm/yyyy').click();
  await page.getByRole('cell', { name: '1', exact: true }).first().click();
  await page.getByRole('cell', { name: 'September' }).click();
  await page.getByText('Sep', { exact: true }).click();
  await page.getByRole('cell', { name: 'September' }).click();
  await page.getByRole('cell', { name: '«' }).click();
  await page.getByRole('cell', { name: '2023' }).click();
  await page.getByPlaceholder('Comment').click();
  await page.getByPlaceholder('Comment').fill('hi');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await page.goto('https://katalon-demo-cura.herokuapp.com/');})