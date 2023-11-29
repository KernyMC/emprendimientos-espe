import { View, Text, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";

export default function InicioSC() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyles="dark-content" />
      {/* barra de búsqueda*/}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="#gray" />
          <TextInput placeholder = "Universidad" className="ml-2 flex-1" />
          
          </View>
        </View>
    </SafeAreaView>
  )
}