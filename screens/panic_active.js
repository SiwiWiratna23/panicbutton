import React, { Component, useState } from 'react';
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  FlatList,
  Image,
  View,
  Input,
  NBBox,
  Divider,
  Center,Select, CheckIcon
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Separator from '../components/separator';

const PanicActive = ({ navigation }) => {
  const [service, setService] = useState('');
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'50px'}>
          <Center>
            <Text fontSize={'26px'} color="#3E4450" textAlign="center">
              Panic Button
            </Text>
            <Separator height={'2'} />
            <Text fontSize={'14px'} color="#ACACAC" textAlign="center">
              Tekan tombol dibawah ini jika anda berada di situasi darurat
            </Text>
            <Separator height={'10'} />
            
            <Separator height={'5'} />
            <Center>
            <Pressable onPress={() => navigation.navigate('PanicInactive')}>
            <Box bg="#FEF6F7" w={'223px'} h={'223px'} borderRadius="full">
              <Box bg="#FBE1E4" w={'183px'} h={'183px'} borderRadius="full" m={'20px'}>
               <Box bg="#ED4C5C" w={'143px'} h={'143px'} borderRadius="full" m={'20px'}>
              </Box>
              </Box>
            </Box>
            </Pressable>
            </Center>
            <Separator height={'5'} />
            <Box w={'100%'} h={'40px'} borderRadius="md">
              <Select
                selectedValue={service}
                accessibilityLabel="Choose Service"
                placeholder="Pilih layanan darurat"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="s" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}>
                <Select.Item label="Pemadam Kebakaran" value="kebakaran" />
                <Select.Item label="Polisi" value="polisi" />
                <Select.Item label="Tenaga Medis" value="medis" />
                <Select.Item label="Basarnas" value="basarnas" />
                <Select.Item label="BNPB" value="BNPB" />
              </Select>
            </Box>
            <Separator height={'10'} />
            <Separator height={'10'} />
            <Separator height={'10'} />
            <Pressable onPress={() => navigation.navigate('PanicInactive')}>
              <Box
                mt={'10px'}
                w={'200px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#B3D8FF"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  Isi Data
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
 );
};

export default PanicActive;
