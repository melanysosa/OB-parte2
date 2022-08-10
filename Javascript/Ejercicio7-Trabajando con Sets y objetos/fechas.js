const fecha_hoy = new Date();

const fecha_nacimiento = new Date(1995, 08, 25);

const fecha_tarde = fecha_hoy > fecha_nacimiento;

const día_nacimiento = fecha_nacimiento.getDate();

const mes_nacimiento = fecha_nacimiento.getMonth() + 1;

const año_nacimiento=fecha_nacimiento.getFullYear()
