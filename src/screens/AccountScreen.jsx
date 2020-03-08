import React, { useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/spacer";
import { Context as AuthContext } from "../context/authContext";
const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Button title="SIGN OUT" onPress={signOut} />
    </SafeAreaView>
  );
};

export default AccountScreen;
