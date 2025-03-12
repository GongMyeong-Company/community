import CustomButton from '@/components/CustomButton';
import { SafeAreaView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label='버튼'/>
    </SafeAreaView>
  );
}

