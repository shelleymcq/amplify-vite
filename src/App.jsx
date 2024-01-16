import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import Home from "./pages/Home";

function App({ signOut }) {
  return (
    <View className="App">
      <Home />
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
