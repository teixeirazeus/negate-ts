import not from "../src/negate-ts"

/**
 * Not test
 */
describe("Teste not function", () => {
  it("works if true is truthy", () => {
    expect(not(false)).toBeTruthy()
  })
  it("works if false is falsy", () => {
    expect(not(true)).toBeFalsy()
  })
})
