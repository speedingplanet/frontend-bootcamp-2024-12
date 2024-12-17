/*
describe('A suite of tests', () => {
	it('should add two numbers', () => {
		expect(2 + 4).toBe(6);
	});
});
*/

/*
Tests are written with it() or test();
Both take the same arguments it(description: string, testFunction: () => void)

Skip a test: it.skip()
Prioritize a test: it.only()

In the test function, use expect one or more times

An expectation:
expect(actualValue).matcherFn(expectedValue)
where matcherFn is a matcher like toBe(), toEqual(), toBeLessThan(), etc.
https://jestjs.io/docs/using-matchers
API docs for expect: https://jestjs.io/docs/expect

In tests we can negate an expectation
expect(2+2).not.toEqual(5);

*/
it('(it) should not fail', () => {
	expect(1).toBeTruthy();
});

test('(test) should not fail', () => {
	expect(1).toBeTruthy();
});

// This test should fail
it.skip('should fail', () => {
	expect(2 + 4).toEqual(3);
});

it('should negate an expectation', () => {
	expect(2 +  4).not.toEqual(10);
});