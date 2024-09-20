import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NumberProvider } from "./context/RandomNumberContext";
import RandomeNumber from "./components/RandomeNumber";
import AddRandomNumber from "./components/AddRandomNumber";


export default function Page() {

  const username = "Shakiv"
  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <NumberProvider>

          <SafeAreaView>
            <AddRandomNumber />

            <RandomeNumber />

          </SafeAreaView>
        </NumberProvider>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
