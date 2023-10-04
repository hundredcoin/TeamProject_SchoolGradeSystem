let inputValue = '';   //입력받은 값을 저장할 변수
let displayValue = '';  //값을 표시할 변수
let resultValue = '';   //결과값을 저장할 변수
let operator = '';      //연산자를 저장할 변수

//사용자가 숫자버튼을 입력하면 그 값을 처리할 함수
function input(value) {
    //입력받은 값을 각각 저장하고
    inputValue += value;
    displayValue += value;

    //html 에서 display클래스를 가지고있는 곳의 value값을 설정
    document.querySelector('.display').value = displayValue
}

//사용자가 연산자를 입력하면 그 값을 처리할 함수
function inputCalc(cal){
    inputValue += cal;
    displayValue += cal;
    //입력받은 연산자를 따로 저장한다.
    operator += cal;

    document.querySelector('.display').value = displayValue;
}  

//사용자가 '='을 입력하면 지금까지 입력한 값을 연산할 함수
function calculate() {
    //지금까지 저장된 값을 저장한 연산자를 기준으로 나눠 배열형태로 반환 
    let calculation = inputValue.split(operator);

    //배열형태로 나눠진 입력값을 각각 인덱스로 뽑아서 저장
    let num1 = parseInt(calculation[0]);
    let num2 = parseInt(calculation[1]);

    //저장한 값을 연산자에 따라 연산하기위해 switch문으로 연산
    switch(operator) {
        case '+':
            resultValue = num1 + num2;
            break;
        case '-':
            resultValue = num1 - num2;
            break;
        case '*':
            resultValue = num1 * num2;
            break;
        case '/':
            resultValue = num1 / num2;
            break;
        default:
            resultValue = '';
    }
    //연산완료한 값을 표시
    document.querySelector('.display').value = resultValue;  
    
    //다음 연산을 위해 저장값 모두 초기화
    displayValue = '';
    inputValue ='';
    operator = '';
}

//ac버튼을 누르면 저장된값을 모두 초기화 하기 위한 함수
function clearDisplay() {
    inputValue = '';
    displayValue = '';
    resultValue = '';
    operator = '';
    document.querySelector('.display').value = '';
}
