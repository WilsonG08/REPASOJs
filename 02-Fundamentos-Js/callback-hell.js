const empleados = [
  {
    id: 1,
    nombre: "Wilson",
  },
  {
    id: 2,
    nombre: "Giss",
  },
  {
    id: 3,
    nombre: "Majo",
  },
];

const salarios = [
  {
    id: 1,
    salario: "1000",
  },
  {
    id: 2,
    salario: "1500",
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callbackS) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  if (salario) {
    callbackS(null, salario);
  } else {
    callbackS(`No existe saladio para el ${id} `);
  }
};

id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR!");
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    
    if (err) {
      return console.log(err);
    }

    console.log("Empleado existe");
    console.log("El empleado:", empleado, "tiene un salario de:", salario);
  
    });

});
