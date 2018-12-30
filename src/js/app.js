/**
 * This is your JavaScript application's entry-point.
 *
 * Webpack will look into this file to find references to
 * other source files.
 */
/**
 * @module jQuery
 */
import 'jquery';

/**
 * @module Popper.js
 */
import 'popper.js';

/**
 * @module Bootstrap
 */
import 'bootstrap';

/**
 * @module FontAwesome5
 */
import '@fortawesome/fontawesome-free/js/all';

/**
 * @module MBD + datatables addon
 */
import '../vendors/mdb/js/mdb';
import '../vendors/mdb/js/addons/datatables';

// Load our example file
import './example';
