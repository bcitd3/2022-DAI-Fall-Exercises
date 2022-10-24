import { View, Text, Button } from 'react-native';





export default function Home(){

    return(
        <View>
            <Text>Welcome To My App</Text>
            <Button title='Go To Animation' onPress={()=>alert('going to animation!')} />
        </View>
    )

}