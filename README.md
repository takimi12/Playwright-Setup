1.npm init playwright@latest

2.✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · false
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true


3. w przypadku playwrighta nie ma zadnych dodaktowych skryptow, ktore pozwalaja testy uruchomic, dlatego trzeba do package.json dodać własny

"e2e": "playwright test"

4. uruchamiamy npm run e2e --ui 
5. w playwright.config.ts dodajemy
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',
    + 
 webServer:{
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true
  },
# Playwright-Setup
