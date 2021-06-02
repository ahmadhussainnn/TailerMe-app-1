import React from 'react';
import { Text, View, Button } from 'react-native';


const LoginScreen = ({ navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Login  </Text>
        {/* <Button
            title="Go to Order screen"
            onPress={() => navigation.navigate("Orders")}
        /> */}
    </View>
    );
};

export default LoginScreen;