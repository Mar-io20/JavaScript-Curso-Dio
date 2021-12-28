function fn() {
  return "code here";
}

const arrowFn = () => "code here";
const arrowFn2 = () => {
  // mais de uma expreção
  return "code here";
};

//funções tambem são objetos
fn.prop = "posso criar propriedades";

console.log(fn());
console.log(fn.prop());
