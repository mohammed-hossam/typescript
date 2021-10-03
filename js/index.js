var input1 = document.querySelector('#number1');
var input2 = document.querySelector('#number2');
var btn = document.querySelector('#btn');
var ans = document.querySelector('#ans');
function add(num1, num2) {
    var finalAnswer = num1 + num2;
    //   console.log(finalAnswer, typeof finalAnswer);
    ans.textContent = "finalAnswer is " + finalAnswer;
}
btn.addEventListener('click', function (e) {
    //   console.log(input1.value, typeof input1.value);
    add(Number(input1.value), Number(input2.value));
});
