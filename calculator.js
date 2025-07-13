class Calculator {
  constructor() {
    this.currentOperation = '';
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '';
    this.userVisualization = document.getElementById("visualization");
    this.userVisualizationTotal = document.getElementById("result");
    this.actionsButtons = document.querySelectorAll('.content');
    this.initEvents();
  }

  // https://collectui.com/designers/chashi/calculator

  initEvents() {
    this.actionsButtons.forEach(action => {
      action.addEventListener('click', () => {
        const value = action.getAttribute('data-value');

        if (!isNaN(value)) {
          this.currentOperation += value;
          this.updateScreen(value)
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
          this.firstNumber = this.currentOperation;
          this.operator = value;
          this.currentOperation = '';
          this.updateScreen(' ' + value + ' ');
          this.deleteValueTotal();
          this.updateScreenTotal(value);
        } else if (value === '=') {
          this.calc();
        } else if (value === 'AC') {
          this.deleteValue();
          this.currentOperation = '';
          this.firstNumber = '';
          this.secondNumber = '';
          this.operator = '';
        } else if (value === 'C') {
          this.deleteValueOneToOne();
        }
      });
    });
  }

  updateScreen(value) {
    this.userVisualization.textContent += value;
    this.userVisualizationTotal.textContent += value;
  }

  deleteValue() {
    this.userVisualization.textContent = '';
    this.userVisualizationTotal.textContent = '';
  }

  deleteValueOneToOne() {
    this.userVisualization.textContent = this.userVisualization.textContent.slice(0, -1);
    this.userVisualizationTotal.textContent = this.userVisualizationTotal.textContent.slice(0, -1);
    this.currentOperation = this.currentOperation.slice(0, -1);
  }

  deleteValueTotal() {
    this.userVisualizationTotal.textContent = '';
  }

  updateScreenTotal(valueOperator) {
    this.userVisualizationTotal.textContent += valueOperator;
  }

  calc() {
    this.secondNumber = this.currentOperation;

    const numOne = parseFloat(this.firstNumber);
    const numTwo = parseFloat(this.secondNumber);
    let result = 0;
    let percentSum = 0;

    switch (this.operator) {
      case '+':
        result = numOne + numTwo;
        percentSum = result;
        break;
      case '-':
        result = numOne - numTwo;
        const percentSus = result;
        break;
      case '*':
        result = numOne * numTwo;
        const percentMul = result;

        break;
      case '/':
        result = numTwo !== 0 ? numOne / numTwo : 'Error';
        const percentDiv = result;

        break;

      case '%':
        numOne ? result = (numOne / 100) :
          numOne && numTwo ? result = (percentSum / 100) :
            'Error'
        break;
      default:
        alert("Operación no válida");
        return;
    }

    this.userVisualizationTotal.textContent = result;
    this.userVisualization.textContent = result;
    this.currentOperation = result.toString();
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '';
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const myCalculator = new Calculator();
});
