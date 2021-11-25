import CSSInterface from 'react-with-styles-interface-css';

import registerInterfaceWithDefaultTheme from './registerInterfaceWithDefaultTheme';

export default function registerCSSInterfaceWithDefaultTheme() {
  console.log('inside');
  registerInterfaceWithDefaultTheme(CSSInterface);
}
