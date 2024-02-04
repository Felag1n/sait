// Получаем элементы из DOM
const input = document.querySelector('.input');
const icon = document.querySelector('.icon');
// Добавляем обработчик события для клика по иконке
icon.addEventListener('click', () => {
  // Получаем значение из поля ввода
  const inputValue = input.value;
  
  // Делаем что-то с полученным значением (например, сохраняем в памяти)
  console.log(`Запомни: ${inputValue}`);
  
  // Очищаем поле ввода
  input.value = '';
});