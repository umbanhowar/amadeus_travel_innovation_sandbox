/**
 * Amadeus Travel Innovation Sandbox
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmadeusTravelInnovationSandbox);
  }
}(this, function(expect, AmadeusTravelInnovationSandbox) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmadeusTravelInnovationSandbox.VehicleInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VehicleInfo', function() {
    it('should create an instance of VehicleInfo', function() {
      // uncomment below and update the code to test VehicleInfo
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be.a(AmadeusTravelInnovationSandbox.VehicleInfo);
    });

    it('should have the property acrissCode (base name: "acriss_code")', function() {
      // uncomment below and update the code to test the property acrissCode
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be();
    });

    it('should have the property transmission (base name: "transmission")', function() {
      // uncomment below and update the code to test the property transmission
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be();
    });

    it('should have the property airConditioning (base name: "air_conditioning")', function() {
      // uncomment below and update the code to test the property airConditioning
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be();
    });

    it('should have the property fuel (base name: "fuel")', function() {
      // uncomment below and update the code to test the property fuel
      //var instane = new AmadeusTravelInnovationSandbox.VehicleInfo();
      //expect(instance).to.be();
    });

  });

}));
