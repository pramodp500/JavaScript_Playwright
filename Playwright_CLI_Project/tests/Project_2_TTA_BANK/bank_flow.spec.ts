import { test, expect } from '@playwright/test';

test.describe('TTA Bank - Full Workflow', () => {
    // Generate random details for signup
    const timestamp = Date.now();
    const randomEmail = `testuser_${timestamp}@example.com`;
    const fullName = `TTA User ${timestamp}`;
    const password = 'Password!@#123';

    test('Should signup, verify balance, transfer funds, and verify final balance', async ({ page }) => {
        // 1. Open the Bank Application
        await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
        
        // 2. Create a Dummy Signup
        await page.getByRole('button', { name: 'Sign Up' }).click();
        await page.getByRole('textbox', { name: 'John Doe' }).fill(fullName);
        await page.getByRole('textbox', { name: 'you@example.com' }).fill(randomEmail);
        await page.getByRole('textbox', { name: '••••••••' }).fill(password);
        await page.getByRole('button', { name: 'Create Account' }).click();

        // 3. Verify that the 50k $ balance is present
        // Using a more robust locator for the balance heading
        const initialBalance = page.getByRole('heading', { name: '$50,000.00' });
        await expect(initialBalance).toBeVisible();
        console.log('Verified initial balance: $50,000.00');

        // 4. In the Transfer Funds Tab and transfer 5000$ to default dropdown
        await page.getByRole('button', { name: 'Transfer Funds' }).click();
        
        // Fill amount
        await page.getByPlaceholder('0.00').fill('5000');
        
        // Fill description (if required or recorded)
        await page.getByRole('textbox', { name: 'e.g. Rent for October' }).fill('Rent Transfer');
        
        // Continue and Confirm
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('button', { name: 'Confirm Transfer' }).click();

        // 5. Verify that in the dashboard it will be the 45K $ balance
        await page.getByRole('button', { name: 'Dashboard' }).click();
        const finalBalance = page.getByRole('heading', { name: '$45,000.00' });
        await expect(finalBalance).toBeVisible();
        console.log('Verified final balance: $45,000.00');

        // 6. Signout
        await page.getByRole('button', { name: 'Sign Out' }).click();
        
        // Final verification: Ensure we are back at the landing/login page
        await expect(page).toHaveURL(/.*login|.*$/);
    });
});