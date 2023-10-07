function countHours(year, holidays) {
  let extraHours = 0;
  // Itera a través de las fechas de los días festivos
  for (const holiday of holidays) {
    // const [month, day] = holiday.split("/").map(Number);
    // const [month, day] = holiday.split("/").map(n => Number(n));
    const month = Number(holiday.split("/")[0]);
    const day = Number(holiday.split("/")[1]);
    const holidayDate = new Date(year, month - 1, day);

    // Verifica si el día de la semana es de lunes a viernes (1 a 5) y si no es festivo
    if (holidayDate.getDay() >= 1 && holidayDate.getDay() <= 5) {
      extraHours += 2;
    }
  }
  return extraHours;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
const hoursExtra = countHours(year, holidays);
console.log(hoursExtra); // Salida: 4 horas extra en el año
