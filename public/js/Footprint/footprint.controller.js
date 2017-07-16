class FootCtrl {
  constructor($scope) {
    'ngInject';

    $scope.toppings = [
    { name: 'AGUA abundante para hidratarte durante toda la jornada.', wanted: false },
    { name: 'FRUTAS y bolsa para los residuos sólido.', wanted: false },
    { name: 'PROTECTOR SOLAR', wanted: false },
    { name: 'GORRA o SOMBRERO', wanted: false},
    { name: 'REPELENTE de mosquitos, preferiblemente Natural y NO en aereosol.', wanted: false},
    { name: 'CAMISA MANGA LARGA.', wanted: false},
    { name: 'PANTALON LARGO.', wanted: false},
    { name: 'ZAPATOS COMODOS, con suela antideslizante como tenis o botas tipo brama.', wanted: false},
    { name: 'CHAQUETA O CAPA IMPERMEABLE, por si llueve', wanted: false},
    { name: 'ROPA DE CAMBIO, para el final de la jornada, por si te mojas o embarras.', wanted: false}
  ];

    $scope.messages = [
      {
        image: "",
        message: "Niñas y Niños. A la salida pueden asistir niñas y niños preferiblemente a partir de los 4 años, si son menores es muy probable que un adulto deba cargarlos durante algún trayecto de la caminata. Es importante que las niñas y los niños estén en buenas condiciones de salud."
      },
      {
        image: "",
        message: "Adultas y Adultos Mayores. Adultas y adultos mayores también pueden asistir siempre y cuando tengan alguna rutina de actividad física; o sea buen estado físico y tengan el hábito de hacer caminatas diarias. También es muy importante que estén en buenas condiciones de salud (sin lesiones físicas, dificultades respiratorias o cardiacas)."
      },
      {
        image: "",
        message: "Alimentación. Recuerda tomar un rico y saludable desayuno antes de salir de casa. Si quieres traer alimentos, preferiblemente nada que haga basura. Las Frutas son la mejor opción; son muy saludables y no hay riesgos de que contamines el bosque con plásticos y paquetes. No te preocupes por traer mucha comida pues al final del recorrido tomaremos un refrigerio."
      },
      {
        image:"",
        message:"Agua. Recuerda traer abundante agua para tu adecuada hidratación durante toda la jornada ecológica. Equipaje. Para cargar tu agua y tus frutas te recomendamos que lleves una mochila o maleta muy ligera y cómoda, es necesario que lleves las manos libres para caminar. Recuerda empacar ropa de cambio por si te mojas o te embarras, gorra y también una chaqueta o capa impermeable por si llueve."
      }
    ]

  }

}

export default FootCtrl;