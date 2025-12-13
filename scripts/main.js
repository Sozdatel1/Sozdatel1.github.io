

const holidays = {
  // Месячные и ежегодные праздники
  "01-01": "Новый год",
  "01-07": "Православное Рождество",
  "02-14": "День святого Валентина",
  "02-23": "День защитника Отечества",
  "03-08": "Международный женский день",
  "04-07": "Всемирный день здоровья",
  "04-22": "День Земли",
  "05-01": "Праздник труда",
  "05-09": "День Победы",
  "06-01": "День защиты детей",
  "06-12": "День России",
  "07-01": "День Канады",
  "09-01": "День знаний",
  "09-21": "Международный день мира",
  "10-01": "День пожилых людей",
  "12-12": "День Конституции России",
  "04-22": "Пасха (дата ежегодно меняется, обычно апрель или март)",
  "02-01": "Лунный Новый год (Китайский Новый год)", // Дата меняется
  
};

function checkHoliday() {
  const today = new Date();
  const month = today.getMonth() + 1; // Месяцы с 1
  const day = today.getDate();

  const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  const holidayName = holidays[dateKey];
  const displayDiv = document.getElementById('holiday');

  if (displayDiv) {
    if (holidayName) {
      displayDiv.innerHTML = `<h2>Сегодня отмечают праздник : ${holidayName}</h2>`;
    } else {
      displayDiv.innerHTML = `<h2>Сегодня обычный день.</h2>`;
    }
  }
}

// Запускаем при загрузке страницы
window.onload = checkHoliday;
document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('#infoTable tbody tr');

  rows.forEach(row => {
    row.addEventListener('click', () => {
      // Анимация уменьшения
      row.style.transition = 'transform 0.9s ease';

      // Уменьшаем размер
      row.style.transform = 'scale(0)';

      // После окончания анимации увеличиваем обратно
      setTimeout(() => {
        row.style.transform = 'scale(1)';
      }, 300); // длительность анимации уменьшения в миллисекундах

    });
});
});