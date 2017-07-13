class Contact {
  constructor($resource) {
    'ngInject';

    return $resource('/api/contacto/:id', {id: '@_id'}, {
      update: { method: 'PUT'},
      get: { method: 'GET', isArray: false},
      show: { method: 'GET'}
    })

  }

}

export default Contact;