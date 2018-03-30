import _ from 'lodash';
import './style.css';
import Icon from './webpack.svg';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  console.log(Icon);
  element.appendChild(myIcon);
  
  console.log(Data);

  return element;
}

document.body.appendChild(component());
