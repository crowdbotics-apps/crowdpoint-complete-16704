import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile39668Navigator from '../features/UserProfile39668/navigator';
import Tutorial39667Navigator from '../features/Tutorial39667/navigator';
import NotificationList39639Navigator from '../features/NotificationList39639/navigator';
import Settings39638Navigator from '../features/Settings39638/navigator';
import Settings39630Navigator from '../features/Settings39630/navigator';
import UserProfile39628Navigator from '../features/UserProfile39628/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile39668: { screen: UserProfile39668Navigator },
Tutorial39667: { screen: Tutorial39667Navigator },
NotificationList39639: { screen: NotificationList39639Navigator },
Settings39638: { screen: Settings39638Navigator },
Settings39630: { screen: Settings39630Navigator },
UserProfile39628: { screen: UserProfile39628Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
