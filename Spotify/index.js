/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './musicPlayerServices'

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { playerbackService } from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playerbackService);


