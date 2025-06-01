document.addEventListener('DOMContentLoaded', () => {
  const userVisualization = document.getElementById("visualization");
  const userVisualizationTotal = document.getElementById("result");
  const actionsButtons = document.querySelectorAll('.content');

  actionsButtons.forEach(action => {
    action.addEventListener('click', () => {
      const value = action.getAttribute('data-value')
      userVisualization.textContent += value;
      userVisualizationTotal.textContent += value;

      switch (value) {
        case "+":
          const totalAccumulated = parseInt(userVisualization.textContent);
          userVisualizationTotal.textContent = '';
          break

        case 'AC':
          userVisualization.textContent = '';
          userVisualizationTotal.textContent = '';
          break;

        case '=':
          const sum = parseInt(userVisualization.textContent) + totalAccumulated
          userVisualizationTotal.textContent += sum;
          break
      }
    })
  })
})