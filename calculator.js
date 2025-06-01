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

  initEvents() {
    this.actionsButtons.forEach(action => {
      action.addEventListener('click', () => {
        const value = action.getAttribute('data-value');

        if (!isNaN(value)) {
          this.currentOperation += value;
        } else if (['+', '-', '*', '/'].includes(value)) {
          this.firstNumber = this.currentOperation;
          this.operator = value;
          this.currentOperation = '';
          this.updateScreen(' ' + value + ' ');
        } else if (value === '=') {
          this.calc();
        } else if (value === 'AC') {
          this.deleteValue();
          this.currentOperation = '';
          this.firstNumber = '';
          this.secondNumber = '';
          this.operator = '';
        }

        this.userVisualization.textContent += value;
        this.userVisualizationTotal.textContent += value;
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

  calc() {
    this.secondNumber = this.currentOperation;

    const numOne = parseFloat(this.firstNumber);
    const numTwo = parseFloat(this.secondNumber);
    let result = 0;

    switch (this.operator) {
      case '+':
        result = numOne + numTwo;
        break;
      case '-':
        result = numOne - numTwo;
        break;
      case '*':
        result = numOne * numTwo;
        break;
      case '/':
        result = numTwo !== 0 ? numOne / numTwo : 'Error';
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myCalculator = new Calculator();
});
