import * as Clipboard from 'expo-clipboard';
import { Alert } from 'react-native';


const useClipboard = () => {
    const copyToClipboard = async (text) => {
        await Clipboard.setStringAsync(text);
        Alert.alert('Text Copied to Clipboard!')
    };

    return {
        copyToClipboard
    }
}

export default useClipboard;
