const path = require('path');


const i18n = new (require('i18n-2'))({
  locales: ['am', 'ar', 'de', 'en', 'es', 'fa', 'fr', 'it', 'ru', 'ta', 'ti', 'uk'],
  directory: path.join(__dirname, '../../config/locales'),
  extension: '.json',
  defaultLocale: 'en',
  fallbacks: { 'fr-CA': 'fr', 'en-GB': 'en' },
});

const { vsprintf } = require('sprintf-js');

module.exports = {


  friendlyName: 'Translate',


  description: 'Translate something.',

  sync: true,

  inputs: {

    locale: {
      type: 'string'
    },
    message: {
      type: 'string',
      required: true
    },
    arguments: {
      type: 'ref'
    }
  },


  exits: {

    success: {
      description: 'All done.'
    }

  },


  fn (inputs, exits) {
    // TODO

    let msg = i18n.translate(inputs.locale, inputs.message);

    if (inputs.arguments && inputs.arguments.length) {
      msg = vsprintf(msg, inputs.arguments);
    }



    exits.success(msg);

  }


};

