import React from 'react';
import { Text, View, Button } from 'react-native';


const ProfileScreen = ({ navigation }) => {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Profile screen </Text>
        <Button
            title="Go to Order screen"
            onPress={() => navigation.navigate("Orders")}
        />
    </View>
    );
};


export default ProfileScreen;