import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com/account/register');
  await page.locator('input[name="customer[first_name]"]').click();
  await page.locator('input[name="customer[first_name]"]').fill('tese');
  await page.locator('input[name="customer[first_name]"]').click();
  await page.locator('input[name="customer[last_name]"]').click();
  await page.locator('input[name="customer[last_name]"]').fill('esdad');
  await page.locator('input[name="customer[email]"]').click();
  await page.locator('input[name="customer[email]"]').fill('sa');
  await page.locator('input[name="customer[email]"]').click();
  await page.locator('input[name="customer[email]"]').fill('sadasd@test.com');
  await page.locator('input[name="customer[password]"]').click();
  await page.locator('input[name="customer[password]"]').click();
  await page.locator('input[name="customer[password]"]').fill('password1@#');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 9' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 5' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 8' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 7' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('group', { name: 'Click on everything that is' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('group', { name: 'Click on everything that is' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click({
    position: {
      x: 384,
      y: 185
    }
  });
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click({
    position: {
      x: 378,
      y: 169
    }
  });
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('img', { name: 'Image-based CAPTCHA challenge' }).click({
    position: {
      x: 71,
      y: 279
    }
  });
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('img', { name: 'Image-based CAPTCHA challenge' }).click({
    position: {
      x: 70,
      y: 372
    }
  });
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Next Challenge, page 1 of' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('img', { name: 'Image-based CAPTCHA challenge' }).dblclick({
    position: {
      x: 57,
      y: 394
    }
  });
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('img', { name: 'Image-based CAPTCHA challenge' }).click({
    position: {
      x: 70,
      y: 385
    }
  });
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' }).click();
  await page.getByRole('link', { name: 'Return to the previous page.' }).click();
  await page.locator('input[name="customer[password]"]').click();
  await page.locator('input[name="customer[password]"]').fill('passwrd');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('input[name="customer[password]"]').click();
  await page.locator('input[name="customer[password]"]').fill('passwrd1');
});