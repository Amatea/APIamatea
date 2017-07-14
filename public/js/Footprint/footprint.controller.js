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

  }

}

export default FootCtrl;