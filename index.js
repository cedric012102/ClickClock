/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as ClickClock} from './app.json';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

AppRegistry.registerComponent(ClickClock, () => App);
