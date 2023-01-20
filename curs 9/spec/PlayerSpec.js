describe('hello wolrd',()=>{
  it("returns hello world",()=>{
    var actual= hello();
    expect(actual).toBe("hello world")
  })
})

describe('Suma',()=>{
  it("returns suma 5 + 3 =8",()=>{
 
    expect(add(5,3)).toEqual("8")
  })
})