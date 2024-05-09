import { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toValue = 1, callBack = () => { } }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callBack);
    };

    const fadeOut = ({ duration = 300, toValue = 0, callBack = () => { } }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callBack);
    }

    const startMovingTopPosition = ({
        duration = 300,
        initialPostion = 0,
        toValue = 0,
        easing = Easing.bounce,
        callBack = () => { }
    }) => {
        animatedTop.setValue(initialPostion);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            easing: easing, //Easing.elastic(1),
            useNativeDriver: true,
        }).start(callBack);
    }

    return { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop }
}
