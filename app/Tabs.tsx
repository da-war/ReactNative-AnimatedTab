import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { icons} from "lucide-react-native";
import Animated, { FadeInRight, LinearTransition } from 'react-native-reanimated';
import { motify, MotiProps, MotiView } from 'moti';
import { motifySvg } from 'moti/svg';

type IconNames=keyof typeof icons;
const _spacing=4


interface TabItem{
    icon:IconNames;
    label:string;
}




interface TabProps{
    data:TabItem[];
    selectedIndex:number;
    onChange:(index:number)=>void;
    activeColor:string;
    inactiveColor:string;
    activeBackgroundColor:string;
    inactiveBackgroundColor:string;
}


type IconProps={
    name:IconNames;
} & MotiProps;
const Icon =({name,...otherProps}:IconProps)=>{
    const IconComponent=motifySvg(icons[name])();
    return <IconComponent size={16} {...otherProps} />; 
}

const Tabs:React.FC<TabProps> = ({
    data,
    selectedIndex,
    onChange,
    activeBackgroundColor="#111",
    activeColor="#fff",
    inactiveBackgroundColor="#ddd",
    inactiveColor="#999"
}) => {
   
  return (
    <View style={{flexDirection:"row",gap:_spacing}}>
      {
        data.map((item,index)=>{
        const isSelected=selectedIndex===index;
           return (
           
            <MotiView
            animate={{
                backgroundColor:isSelected?activeBackgroundColor:inactiveBackgroundColor,
                overflow: 'hidden',
                borderRadius:10,
                padding:4
            }}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
            key={index}
            
            >
                <Pressable 
                    style={{justifyContent:'center',alignItems:'center',gap:_spacing,flexDirection:'row',padding:12}} 
                    onPress={()=>onChange(index)}
                    >
                    <Icon 
                        name={item.icon} 
                        animate={{
                            color:isSelected?activeColor:inactiveColor,
                        }}
                        />

                    {isSelected&&(
                        <Animated.Text 
                        entering={FadeInRight.springify().damping(80).stiffness(200)}
                        style={{
                         color:isSelected?activeColor:inactiveColor,
                     }}
                         >
                             {item.label}
                     </Animated.Text>
                    )}
                </Pressable>
            </MotiView>
        )
        })
      }
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({})