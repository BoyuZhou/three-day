import { AsyncStorage } from 'react-native';

export async function save (name ,value) {
    try{
        await AsyncStorage.setItem(name,value);
        console.log(name,'存储成功')
    }catch(error){
        console.log(name,'存储失败')
    }
}

export async function get (name) {
    let value = {}
    try{
        value = await AsyncStorage.getItem(name);
        console.log(name,'获取成功')
    }catch(error){
        console.log(name,'获取失败')
    }
    return value;
}

export async function clear(name) {
    try{
        await AsyncStorage.removeItem(name);
        console.log('数据删除成功...');
    }catch(error){
        console.log('AsyncStorage错误'+error.message);
    }
}
