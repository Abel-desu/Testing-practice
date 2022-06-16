const getCounts = require('./app');
const reverseString = require('./reverse');
const calculate = require('./calculator');
const capitalize = require('./capitalize');

test('getCounts' , () => {
    expect(getCounts('hello'));
  });
  it('reverse string' , () => {
    expect(reverseString('code')).toBe('edoc');
  }) 
  describe('final output' , () => {
    it('add' , () => {
      expect(calculate(2,3 , '+')).toBe(5);
    });
    test('subtract' , () => {
      expect(calculate(2,1,'-')).toBe(1);
    });
  
    
  test('multiply' , () => {
    expect(calculate(2,3,'*')).toBe(6);
  });
    
  test('divide' , ()=> {
    expect(calculate(2,1,'/')).toBe(2);
  });
  });
  test('Capitalize first letter' , ()=> {
    expect(capitalize('microverse')).toBe('Microverse');
  })