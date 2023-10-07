/* 
Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.
Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.
Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.
Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

Cosas a tener en cuenta y consejos:
\
El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc. 
*/

function countHours(year, holidays) {}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];
const hoursExtra = countHours(year, holidays);
console.log(hoursExtra);
