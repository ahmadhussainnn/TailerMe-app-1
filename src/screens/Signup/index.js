import React from 'react';
import { Text, View, Button } from 'react-native';


const SignupScreen = ({ navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Sign up </Text>
        {/* <Button
            title="Go to Notification screen"
            onPress={() => navigation.navigate("Notification")}
        /> */}
    </View>
    );
};

export default SignupScreen;