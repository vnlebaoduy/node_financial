/**
 * Organization.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id:{
        columnName: 'org_id',
        type:       'integer',
        required:   true,
        primaryKey: true,
        index:      true
      },
      username:{
        type:'string'
      },
      email:{
        type:'string'
      },
      name:{
        type:'string'
      }
  }
};

