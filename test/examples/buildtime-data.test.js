import { getPath, runViteDev } from './utils.js'

page.setDefaultTimeout(3000)

test('should see buildtime-data front page', async () => {
    const { kill, port } = await runViteDev(getPath('buildtime-data'))
    await page.goto(`http://localhost:${port}`)

    expect(await page.waitForSelector('pre:has-text("Skywalker")')).toBeTruthy()

    await page.click('"show dynamic imported meta"')
    expect(await page.waitForSelector('pre:has-text("homeworld")')).toBeTruthy()

    kill()
})