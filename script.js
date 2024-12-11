

// 2. Анимация фона параграфа при клике
const paragraph = document.getElementById('paragraph');
paragraph.addEventListener('click', function() {
  paragraph.style.transition = 'background-color 0.5s';
  paragraph.style.backgroundColor = '#ffeb3b';
});

// Анимация для таблицы: плавное появление
const showLecturesBtn = document.getElementById('showLecturesBtn');
const lecturesTable = document.getElementById('lecturesTable');

showLecturesBtn.addEventListener('click', function() {
  // Если таблица скрыта, показываем и начинаем анимацию
  if (lecturesTable.style.display === 'none' || lecturesTable.style.display === '') {
    lecturesTable.style.display = 'block';
    // Делаем таблицу прозрачной, затем плавно показываем
    setTimeout(function() {
      lecturesTable.style.opacity = 1;
      lecturesTable.style.transition = 'opacity 1s';
    }, 10); // Маленькая задержка перед анимацией
  } else {
    // Если таблица видна, скрываем ее
    lecturesTable.style.opacity = 0;
    lecturesTable.style.transition = 'opacity 1s';
    setTimeout(function() {
      lecturesTable.style.display = 'none';
    }, 1000); // Задержка для завершения анимации
  }
});