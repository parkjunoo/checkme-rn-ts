import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { TextField, TextFieldRef } from "../ui/TextField";

const TextFieldDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    default: "",
    focused: "",
    typing: "",
    complete: "",
    disabled: "",
    error: "",
    multiline: "",
    withCounter: "",
    withClear: "",
    withIcons: "",
    withValidation: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const textFieldRef = useRef<TextFieldRef>(null);

  const handleTextChange = (field: string) => (text: string) => {
    setFormData((prev) => ({ ...prev, [field]: text }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "withValidation":
        if (!value) {
          setErrors((prev) => ({ ...prev, [field]: "This field is required" }));
        } else if (value.length < 3) {
          setErrors((prev) => ({
            ...prev,
            [field]: "Must be at least 3 characters",
          }));
        } else {
          setErrors((prev) => ({ ...prev, [field]: "" }));
        }
        break;
      default:
        break;
    }
  };

  const handleFocus = (field: string) => () => {
    console.log(`${field} focused`);
  };

  const handleBlur = (field: string) => () => {
    validateField(field, formData[field as keyof typeof formData]);
  };

  const handleClear = () => {
    setFormData((prev) => ({ ...prev, withClear: "" }));
  };

  const handleLeftIconPress = () => {
    Alert.alert("Left Icon", "Left icon pressed!");
  };

  const handleRightIconPress = () => {
    Alert.alert("Right Icon", "Right icon pressed!");
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    Alert.alert("Success", "Form submitted successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>TextField Components</Text>

      {/* Basic States */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic States</Text>

        <TextField
          label="Default"
          placeholder="Enter text here"
          value={formData.default}
          onChangeText={handleTextChange("default")}
          onFocus={handleFocus("default")}
          onBlur={handleBlur("default")}
        />

        <TextField
          label="Focused"
          placeholder="This field is focused"
          value={formData.focused}
          onChangeText={handleTextChange("focused")}
          onFocus={handleFocus("focused")}
          onBlur={handleBlur("focused")}
          state="focused"
        />

        <TextField
          label="Typing"
          placeholder="Type something..."
          value={formData.typing}
          onChangeText={handleTextChange("typing")}
          onFocus={handleFocus("typing")}
          onBlur={handleBlur("typing")}
        />

        <TextField
          label="Complete"
          placeholder="This field is complete"
          value={formData.complete}
          onChangeText={handleTextChange("complete")}
          onFocus={handleFocus("complete")}
          onBlur={handleBlur("complete")}
        />

        <TextField
          label="Disabled"
          placeholder="This field is disabled"
          value={formData.disabled}
          onChangeText={handleTextChange("disabled")}
          disabled={true}
        />

        <TextField
          label="Error"
          placeholder="This field has an error"
          value={formData.error}
          onChangeText={handleTextChange("error")}
          onFocus={handleFocus("error")}
          onBlur={handleBlur("error")}
          state="error"
          errorMessage="This is an error message"
        />
      </View>

      {/* Multiline TextField */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Multiline TextField</Text>

        <TextField
          label="Multiline (Short)"
          placeholder="Enter multiple lines of text..."
          value={formData.multiline}
          onChangeText={handleTextChange("multiline")}
          onFocus={handleFocus("multiline")}
          onBlur={handleBlur("multiline")}
          variant="multiline"
          numberOfLines={3}
          maxNumberOfLines={5}
          helperText="This is a multiline text field"
        />
      </View>

      {/* With Counter */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With Character Counter</Text>

        <TextField
          label="With Counter"
          placeholder="Type with character limit"
          value={formData.withCounter}
          onChangeText={handleTextChange("withCounter")}
          onFocus={handleFocus("withCounter")}
          onBlur={handleBlur("withCounter")}
          showCharacterCounter={true}
          maxLength={100}
          helperText="Maximum 100 characters"
        />
      </View>

      {/* With Clear Button */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With Clear Button</Text>

        <TextField
          label="With Clear Button"
          placeholder="Type and clear easily"
          value={formData.withClear}
          onChangeText={handleTextChange("withClear")}
          onFocus={handleFocus("withClear")}
          onBlur={handleBlur("withClear")}
          showClearButton={true}
          helperText="Click the X to clear"
        />
      </View>

      {/* With Icons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With Icons</Text>

        <TextField
          label="With Icons"
          placeholder="Search with icons"
          value={formData.withIcons}
          onChangeText={handleTextChange("withIcons")}
          onFocus={handleFocus("withIcons")}
          onBlur={handleBlur("withIcons")}
          leftIcon="search"
          rightIcon="filter"
          onLeftIconPress={handleLeftIconPress}
          onRightIconPress={handleRightIconPress}
          helperText="Icons are clickable"
        />
      </View>

      {/* With Validation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With Validation</Text>

        <TextField
          label="Required Field"
          placeholder="This field is required"
          value={formData.withValidation}
          onChangeText={handleTextChange("withValidation")}
          onFocus={handleFocus("withValidation")}
          onBlur={handleBlur("withValidation")}
          required={true}
          errorMessage={errors.withValidation}
          helperText="Must be at least 3 characters"
        />
      </View>

      {/* Different Sizes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Different Sizes</Text>

        <TextField
          label="Small"
          placeholder="Small size"
          size="small"
          value=""
          onChangeText={() => {}}
        />

        <TextField
          label="Medium (Default)"
          placeholder="Medium size"
          size="medium"
          value=""
          onChangeText={() => {}}
        />

        <TextField
          label="Large"
          placeholder="Large size"
          size="large"
          value=""
          onChangeText={() => {}}
        />
      </View>

      {/* Multiline with Counter and Error */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Multiline with Counter and Error
        </Text>

        <TextField
          label="Long Text with Validation"
          placeholder="Enter a long text with validation..."
          value=""
          onChangeText={() => {}}
          variant="multiline"
          numberOfLines={4}
          maxNumberOfLines={8}
          showCharacterCounter={true}
          maxLength={200}
          state="error"
          errorMessage="This is a long error message that demonstrates how error messages are displayed for multiline text fields"
          helperText="This field supports multiline input with character counting and error messages"
        />
      </View>

      {/* Ref Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Using Ref</Text>

        <TextField
          ref={textFieldRef}
          label="Ref Example"
          placeholder="Focus this field programmatically"
          value=""
          onChangeText={() => {}}
          helperText="Use the button below to focus this field"
        />

        <View style={styles.buttonContainer}>
          <Text
            style={styles.button}
            onPress={() => textFieldRef.current?.focus()}
          >
            Focus Field
          </Text>
          <Text
            style={styles.button}
            onPress={() => textFieldRef.current?.clear()}
          >
            Clear Field
          </Text>
        </View>
      </View>

      {/* Form Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Form Example</Text>

        <View style={styles.formContainer}>
          <TextField
            label="Name"
            placeholder="Enter your name"
            value=""
            onChangeText={() => {}}
            required={true}
          />

          <TextField
            label="Email"
            placeholder="Enter your email"
            value=""
            onChangeText={() => {}}
            leftIcon="mail"
            keyboardType="email-address"
            required={true}
          />

          <TextField
            label="Message"
            placeholder="Enter your message"
            value=""
            onChangeText={() => {}}
            variant="multiline"
            numberOfLines={4}
            maxNumberOfLines={8}
            showCharacterCounter={true}
            maxLength={500}
            helperText="Maximum 500 characters"
          />

          <Text style={styles.submitButton} onPress={handleSubmit}>
            Submit Form
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F4F7",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#191F2A",
    marginBottom: 24,
    textAlign: "center",
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#191F2A",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  button: {
    backgroundColor: "#328FEE",
    color: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E1E5EA",
  },
  submitButton: {
    backgroundColor: "#328FEE",
    color: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 16,
  },
});

export default TextFieldDemo;
