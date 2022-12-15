import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [firstInput, setFirstInput] = useState<string | undefined>();
  const [secondInput, setSecondInput] = useState<string | undefined>();
  const [operator, setOperator] = useState<string | undefined>();

  const clearAll = () => {
    resetInputs();
    setDisplay("0");
  };

  const resetInputs = () => {
    setFirstInput(undefined);
    setSecondInput(undefined);
    setOperator(undefined);
  };

  const calculateResult = () => {
    if (operator === "/" && secondInput === "0") {
      // Set error on divide by zero
      setDisplay("Error");
      return;
    }

    // TODO: Add validation

    switch (operator) {
      case "+":
        setDisplay(`${+firstInput + +secondInput}`);
        break;
      case "-":
        setDisplay(`${+firstInput - +secondInput}`);
        break;
      case "*":
        setDisplay(`${+firstInput * +secondInput}`);
        break;
      case "/":
        setDisplay(`${+firstInput / +secondInput}`);
        break;
    }

    resetInputs();
  };

  const handleInputPress = (value: string) => {
    const isOperator = ["+", "-", "*", "/"].includes(value);

    if (!isOperator && !operator && !secondInput) {
      const next = !firstInput ? value : firstInput + value;
      setDisplay(next);
      setFirstInput(next);
      return;
    }

    if (isOperator && firstInput) {
      if (!secondInput) {
        // Update the operator until a secondInput is entered
        setOperator(value);
      } else {
        // Multiple calculations not supported
        return;
      }
    }

    if (isOperator && !secondInput) {
      setOperator(value);
      return;
    }

    // Finally, populate the secondInput
    const next = !secondInput ? value : secondInput + value;
    setDisplay(next);
    setSecondInput(next);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={[styles.button, styles.funcButton, styles.oneColumn]}
          onPress={clearAll}
        >
          <Text>AC</Text>
        </Pressable>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.row}>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("7")}
        >
          <Text>7</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("8")}
        >
          <Text>8</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("9")}
        >
          <Text>9</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.funcButton, styles.oneColumn]}
          onPress={() => handleInputPress("/")}
        >
          <Text>/</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("4")}
        >
          <Text>4</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("5")}
        >
          <Text>5</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("6")}
        >
          <Text>6</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.funcButton, styles.oneColumn]}
          onPress={() => handleInputPress("*")}
        >
          <Text>*</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("1")}
        >
          <Text>1</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("2")}
        >
          <Text>2</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("3")}
        >
          <Text>3</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.funcButton, styles.oneColumn]}
          onPress={() => handleInputPress("-")}
        >
          <Text>-</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress("0")}
        >
          <Text>0</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.oneColumn]}
          onPress={() => handleInputPress(".")}
        >
          <Text>.</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.funcButton, styles.oneColumn]}
          onPress={calculateResult}
        >
          <Text>=</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.funcButton, styles.oneColumn]}
          onPress={() => handleInputPress("+")}
        >
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
    paddingRight: 10,
  },
});
