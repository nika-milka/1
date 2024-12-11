// Получаем изображение студента
const studentImage = document.querySelector('#studentPhoto');

// Обработчик события mouseover (при наведении)
studentImage.addEventListener('mouseover', function() {
  this.style.width = '200px';  // Увеличиваем изображение
  this.style.height = '200px'; // Увеличиваем изображение
});

// Обработчик события mouseout (когда мышка уходит с изображения)
studentImage.addEventListener('mouseout', function() {
  this.style.width = '150px';  // Восстанавливаем размер
  this.style.height = '150px'; // Восстанавливаем размер
});

// Обработчик события click (при клике на изображение)
studentImage.addEventListener('click', function() {
  // Меняем изображение на фото любимого преподавателя
  this.src = 'https://avatars.mds.yandex.net/i?id=757d51ef7d5399ff18a736692a4ad18f_l-5244793-images-thumbs&n=13';
});

// Обработчик события dblclick (при двойном клике на изображение)
studentImage.addEventListener('dblclick', function() {
  alert('Не налегай, у меня не так много любимых преподавателей');
});
const header = document.querySelector('#header');
header.addEventListener('mouseover', function() {
  header.style.transform = 'scale(1.2)';
});
header.addEventListener('mouseout', function() {
  header.style.transform = 'scale(1)';
});
const paragraph = document.querySelector('#paragraph');
paragraph.addEventListener('click', function() {
  paragraph.classList.toggle('clicked');
});