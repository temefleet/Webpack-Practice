//import from ./script2
import $ from 'jquery';
import { welcomeMessage, goodbyeMessage } from './script2.js';
import helloGoodbye from './script2.js';

//import from ./script3
import {welcomeMessage as welcome} from './script3';
import {goodbyeMessage as goodbye} from './script3'; 

//import css
import styles from '../sass/style.scss';

$(document).ready(() => {
  $('#render').css('color', 'blue');
  $('#render').append(`<h1>${welcomeMessage} ${goodbyeMessage}</h1>`);

  $('#render').append(helloGoodbye(welcome, goodbye));
});