function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Contact', {
      url: '/contact',
      templateUrl: 'js/Components/Contact/contact.html',
      controller: 'ContactCtrl'
    });
  
};

export default ContactConfig;