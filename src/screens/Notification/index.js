import React from 'react';
import { Text, View, Button } from 'react-native';




const NotificationScreen = ({ navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Notification Screen </Text>
        <Button
            title="Go to Payment screen"
            onPress={() => navigation.navigate("Payment")}
        />
    </View>
    );
};

export default NotificationScreen;