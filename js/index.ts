const input1 = document.querySelector('#number1') as HTMLInputElement;
const input2 = document.querySelector('#number2') as HTMLInputElement;
const btn = document.querySelector('#btn') as HTMLInputElement;
const ans = document.querySelector('#ans') as HTMLInputElement;

function add(num1: number, num2: number) {
  var finalAnswer = num1 + num2;
  //   console.log(finalAnswer, typeof finalAnswer);
  ans.textContent = `finalAnswer is ${finalAnswer}`;
}

btn.addEventListener('click', (e) => {
  //   console.log(input1.value, typeof input1.value);
  add(Number(input1.value), Number(input2.value));
});
