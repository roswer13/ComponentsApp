import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.purpleBox, {
                opacity: animatedOpacity,
                transform: [{ translateY: animatedTop }],
            }]} />

            <Pressable onPress={() => {
                fadeIn({});
                startMovingTopPosition({ initialPostion: -100, easing: Easing.elastic(2), duration: 750 });
            }} style={{ marginTop: 10 }}>
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
        backgroundColor: colors.primary,
    },
});
