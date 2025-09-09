import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/auth.style";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textDec}>Hello World dear</Text>
        <TouchableOpacity onPress={() => {alert("Hello Dear")}}>
            <Text>Press Me</Text>
        </TouchableOpacity>
        <Link href={"/Notifications"}>Notification</Link>
    </View>
  );
}

