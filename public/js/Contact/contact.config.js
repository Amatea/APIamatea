function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Contact', {
      url: '/contact',
      templateUrl: 'js/Contact/contact.html',
      controller: 'ContactCtrl'
    });
  
};

export default ContactConfig;