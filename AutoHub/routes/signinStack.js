import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Signin from "../Components/Signin";
import Mains from "../Components/Mains";

const screens = {
    signinScreen: {
        screen: Signin
    },
    MainsScreen: {
        screen: Mains
    },

}

const signinStack = createStackNavigator(screens);

export default createAppContainer(signinStack);