import React from 'react';
import { Text, View, Button } from 'react-native';


const OrderScreen = ({ navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Order Screen </Text>
        <Button
            title="Go to Notification screen"
            onPress={() => navigation.navigate("Notification")}
        />
    </View>
    );
};

export default OrderScreen;