import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import './rn-addons';

// import stories
configure(() => {
//   require('./stories');
    require('./ContactUs_stories')
    require('./Detail_stories')
    require('./EditAccount_stories')
    require('./ExecHour_stories')
    require('./ExecInfo_stories')
    require('./ExecMenu_stories')
    require('./ExecPhoto_stories')
    require('./FavPage_stories')
    require('./ForgotPassword_stories')
    require('./GeHome_stories')
    require('./Loading_stories')
    require('./Login_stories')
    require('./MapPage_stories')
    require('./PSA_stories')
    require('./ProfilePage_stories')
    require('./Register_stories')
    require('./Taxi_stories')
    require('./Transit_stories')
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;