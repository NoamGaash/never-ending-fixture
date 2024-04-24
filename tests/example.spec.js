const { test } = require('@playwright/test');

const myFixture = test.extend({
  autoFixture: [async ({}, use) => {
    await use();
    console.log('Fixture teardown starts');
    await new Promise((r) => setTimeout(r, 31_000));
    console.log('Fixture teardown ends');
    throw "will never be thrown";
  }, { auto: true, timeout: 60_000, scope: 'worker'}]
});

myFixture('my test', async ({}) => {
  console.log('test');
})
