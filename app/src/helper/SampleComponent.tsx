import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const SampleComponent: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                Hello Sample
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 20,
        margin: 16,
    },
});

export default SampleComponent;
