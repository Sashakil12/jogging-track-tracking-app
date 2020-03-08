import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { state, signIn, clearError } = useContext(AuthContext);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearError();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign In to continue</Text>
      </Spacer>
      <Input
        label="email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        type="text"
      />
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="password"
        value={password}
        onChangeText={setPassword}
        type="text"
        secureTextEntry
      />
      <Spacer>
        <Button
          icon={<AntDesign name="login" size={15} color="white" />}
          iconLeft
          title=" Sign In"
          onPress={() => signIn({ email, password })}
        />
      </Spacer>
      <Spacer>
        {state.error ? <Text style={styles.error}>{state.error}</Text> : null}
      </Spacer>
      <Spacer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sign Up");
          }}
        >
          <Text style={{ fontWeight: "200" }} h4>
            Don't have an account? Tap to Sign Up instead!
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  }
});
export default SignUpScreen;
