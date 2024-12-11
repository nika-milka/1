var header = document.getElementById('main-header');
      
header.addEventListener('mouseover', function() {
  this.style.transition = 'font-size 0.3s ease-in-out'; // Добавляем плавное изменение
  this.style.fontSize = '4rem'; // Увеличиваем размер шрифта
});

header.addEventListener('mouseout', function() {
  this.style.fontSize = '2rem'; // Возвращаем исходный размер шрифта
});

function openModal(serviceType) {
  document.getElementById('modalTitle').innerText = serviceType;
  var modal = new bootstrap.Modal(document.getElementById('orderModal'));
  modal.show();
}
const studentPhoto = document.getElementById('studentPhoto');
      
// Функция для анимации вращения
function rotatePhoto(degrees) {
  studentPhoto.style.transition = 'transform 0.5s ease';  // Плавное вращение
  studentPhoto.style.transform = `rotate(${degrees}deg)`; // Вращаем изображение
}

studentPhoto.addEventListener('mouseenter', () => {
  rotatePhoto(360); // Вращаем изображение на 360 градусов
});

studentPhoto.addEventListener('mouseleave', () => {
  rotatePhoto(0); // Возвращаем изображение в исходное положение
});


document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Найти элемент для вывода сообщения
  const successMessage = document.getElementById('successMessage');

  // Убедиться, что он отображается
  successMessage.style.display = 'block';

  // Добавить класс анимации
  successMessage.classList.add('animate-text');

  // Удалить класс анимации после завершения (чтобы можно было повторить)
  setTimeout(() => {
      successMessage.classList.remove('animate-text');
  }, 2000);

  // (Опционально) Скрыть сообщение через некоторое время
  setTimeout(() => {
      successMessage.style.display = 'none';
  }, 4000);
});
