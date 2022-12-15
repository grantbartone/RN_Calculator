import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("0");

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable style={[styles.button, styles.funcButton, styles.oneColumn]}>
          <Text>AC</Text>
        </Pressable>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>7</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>8</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>9</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.funcButton, styles.oneColumn]}>
          <Text>/</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>4</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>5</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>6</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.funcButton, styles.oneColumn]}>
          <Text>*</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>1</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>2</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>4</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.funcButton, styles.oneColumn]}>
          <Text>-</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>0</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>.</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.oneColumn]}>
          <Text>=</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.funcButton, styles.oneColumn]}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
    backgroundColor: "black",
    color: "white",
  },
  row: { flexDirection: "row", height: 100 },
  oneColumn: { flex: 1 },
  twoColumn: { flex: 2 },
  threeColumn: { flex: 3 },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "gray",
  },
  funcButton: { backgroundColor: "orange" },
  display: {
    flex: 3,
    borderWidth: 1,
    textAlign: "right",
    color: "white",
    fontSize: 50,
    lineHeight: "100%",
    marginRight: 10,
  },
});
