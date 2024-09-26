import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs, { TabItem } from './Tabs';

const colors = [
    'red',
    'cyan',
    'green',
    'yellow',
    'purple'
];

const Index = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const data:TabItem[] = [
        { icon: 'LifeBuoy', label: 'Buoy' },
        { icon: 'Fish', label: 'Fresh Fish' },
        { icon: 'Sailboat', label: 'Sail' },
        { icon: 'Ship', label: 'Ship It' },
        { icon: 'ShipWheel', label: 'Manage it' },
    ];

    const handleChange = (index: number) => {
        setSelectedIndex(index);
        console.log('Selected Index:', index);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
               <View style={{justifyContent:"center",alignItems:'center'}}>
               <Tabs 
                    data={data} 
                    selectedIndex={selectedIndex} 
                    onChange={handleChange} 
                    activeColor="#fff"
                    inactiveColor="#999"
                    activeBackgroundColor="#111"
                    inactiveBackgroundColor="#ddd"
                />
               </View>
               <View style={{flex:1,backgroundColor:colors[selectedIndex],margin:20,borderRadius:30}}></View>
                
            </View>
        </SafeAreaView>
    )
}

export default Index;

