import React from 'react';
import { Text, View, Button } from 'react-native';



const PaymentScreen = ({ navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Payment Screen </Text>
        <Button
            title="Go Back"
            onPress={() => navigation.navigate("Notification")}
        />
    </View>
    );
};



export default PaymentScreen;