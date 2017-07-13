class RestaurationCtrl {
  constructor($scope, leafletData) {
    'ngInject';

    angular.extend($scope, {
        
        defaults: {
            scrollWheelZoom: false
        },

        markers: {
                    cumbre: {
                        lat: 3.6476444587930907, 
                        lng: -76.56929969787596,
                        message: "La Cumbre",
                        focus: false
                    },

                    mulalo: {
                        lat: 3.644244947716166,
                        lng: -76.49186432361603,
                        message: "mulalo",
                        focus: false
                    },

                    piedragrande: {
                        lat: 3.450944580701558,
                        lng: -76.59168004989623,
                        message: "piedragrande",
                        focus: false
                    },

                    arbolito: {
                        lat: 3.4420718167584,
                        lng: -76.60539686679839,
                        message: "Arbolito",
                        focus: false
                    },

                    cajita: {
                        lat: 3.451378310552176,
                        lng: -76.61656558513641,
                        message: "La Cajita",
                        focus: false
                    },

                    yolanda: {
                        lat: 3.4223982967446647,
                        lng: -76.6260015964508,
                        message: "La Yolanda",
                        focus: false
                    },

                    danubio: {
                        lat: 3.421937779452153,
                        lng: -76.6534674167633,
                        message: "Danubio",
                        focus: false
                    },

                    valencia: {
                        lat: 3.4212148739535606,
                        lng: -76.64283514022827,
                        message: "Valencia",
                        focus: false
                    },

                    yanaconas: {
                        lat: 3.4269445544112576,
                        lng: -76.6040825843811,
                        message: "Yanaconas",
                        focus: false
                    },

                    pance: {
                        lat: 3.322991091624113,
                        lng: -76.59765601158142,
                        message: "Pance",
                        focus: false
                    },
                },

    });



  $scope.regions = {

                general: {
                    northEast: {
                        lat: 3.8656247834774597,
                        lng: -76.1407470703125
                    },
                    southWest: {
                        lat: 3.2077041274093783,
                        lng: -77.04299926757812
                    }
                },
                parquenacional: {
                    southWest: {
                        lat: 3.3012800677970304,
                        lng: -76.75769805908203
                    },
                    northEast: {
                        lat: 3.465787667313853,
                        lng: -76.51187896728516
                    }
                },
                yanaconas: {
                    southWest: {
                        lat: 3.4217075207229035,
                        lng: -76.61041259765624
                    },
                    northEast: {
                        lat: 3.431988786752452,
                        lng: -76.59504890441895
                    }
                }
            };

  angular.extend($scope, {
                maxbounds: $scope.regions.general
            });


  }
}

export default RestaurationCtrl;