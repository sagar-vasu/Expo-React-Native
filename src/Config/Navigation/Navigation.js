// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import {Home,About,Contact} from '../../Screens/index'


// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: Home,
//     },
//     About:{
//         screen: About,
//     },
//     Contact:{
//         screen: Contact,
//     }
// });

// export default createAppContainer(AppNavigator)


// Tab Novigation


// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Home, About, Contact } from '../../Screens/index'



// const TabNavigator = createBottomTabNavigator({
//     Home: {
//         screen: Home,
//     },
//     About: {
//         screen: About,
//     },
//     Contact: {
//         screen: Contact,
//     },



// },
//     {
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//     }
// );

// export default createAppContainer(TabNavigator);




// Drawer Navigation


import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Home, About, Contact } from '../../Screens/index'



const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    About: {
        screen: About,
    },
    Contact: {
        screen: Contact
    }
});

export default createAppContainer(MyDrawerNavigator);