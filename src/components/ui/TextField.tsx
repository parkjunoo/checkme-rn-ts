import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/tokens";

export type TextFieldVariant = "default" | "multiline";
export type TextFieldSize = "small" | "medium" | "large";
export type TextFieldState = "default" | "focused" | "error" | "disabled";

interface TextFieldProps extends Omit<TextInputProps, "style"> {
  // Basic props
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;

  // Styling
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  state?: TextFieldState;
  style?: ViewStyle;
  inputStyle?: TextStyle;

  // Features
  showClearButton?: boolean;
  showCharacterCounter?: boolean;
  maxLength?: number;
  errorMessage?: string;
  helperText?: string;

  // Multiline specific
  multiline?: boolean;
  numberOfLines?: number;
  maxNumberOfLines?: number;

  // Icons
  leftIcon?: string;
  rightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;

  // Validation
  required?: boolean;
  disabled?: boolean;
}

export interface TextFieldRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  isFocused: () => boolean;
}

const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (
    {
      label,
      placeholder,
      value = "",
      onChangeText,
      onFocus,
      onBlur,
      variant = "default",
      size = "medium",
      state = "default",
      style,
      inputStyle,
      showClearButton = false,
      showCharacterCounter = false,
      maxLength,
      errorMessage,
      helperText,
      multiline = false,
      numberOfLines = 1,
      maxNumberOfLines = 10,
      leftIcon,
      rightIcon,
      onLeftIconPress,
      onRightIconPress,
      required = false,
      disabled = false,
      ...textInputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    const inputRef = useRef<TextInput>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const currentState = disabled ? "disabled" : state;
    const isError = currentState === "error" || !!errorMessage;
    const isMultiline = variant === "multiline" || multiline;

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        setInternalValue("");
        onChangeText?.("");
      },
      isFocused: () => isFocused,
    }));

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChangeText = (text: string) => {
      if (value === undefined) {
        setInternalValue(text);
      }
      onChangeText?.(text);
    };

    const handleClear = () => {
      handleChangeText("");
      inputRef.current?.focus();
    };

    const getContainerStyles = (): ViewStyle => {
      const baseStyles: ViewStyle = {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: disabled ? colors.neutral[200] : "#FFFFFF",
        minWidth: 200,
        minHeight: isMultiline ? 120 : 48,
      };

      const sizeStyles: Record<TextFieldSize, ViewStyle> = {
        small: {
          minHeight: isMultiline ? 80 : 40,
          paddingHorizontal: 12,
          paddingVertical: 8,
        },
        medium: {
          minHeight: isMultiline ? 120 : 48,
          paddingHorizontal: 16,
          paddingVertical: 12,
        },
        large: {
          minHeight: isMultiline ? 160 : 56,
          paddingHorizontal: 20,
          paddingVertical: 16,
        },
      };

      const stateStyles: Record<TextFieldState, ViewStyle> = {
        default: {
          borderColor: isFocused ? colors.primary[500] : colors.neutral[200],
        },
        focused: {
          borderColor: colors.primary[500],
        },
        error: {
          borderColor: colors.system.red,
          backgroundColor: isMultiline ? "#FA6C6C" : "#FFFFFF",
        },
        disabled: {
          borderColor: colors.neutral[200],
          backgroundColor: colors.neutral[200],
        },
      };

      return {
        ...baseStyles,
        ...sizeStyles[size],
        ...stateStyles[currentState],
        ...style,
      };
    };

    const getInputStyles = (): TextStyle => {
      const baseStyles: TextStyle = {
        fontSize: 14,
        fontWeight: "500",
        color: disabled ? colors.neutral[500] : colors.text.primary,
        textAlignVertical: isMultiline ? "top" : "center",
        flex: 1,
      };

      const sizeStyles: Record<TextFieldSize, TextStyle> = {
        small: {
          fontSize: 12,
        },
        medium: {
          fontSize: 14,
        },
        large: {
          fontSize: 16,
        },
      };

      return {
        ...baseStyles,
        ...sizeStyles[size],
        ...inputStyle,
      };
    };

    const getLabelStyles = (): TextStyle => {
      return {
        fontSize: 14,
        fontWeight: "600",
        color: isError ? colors.system.red : colors.text.primary,
        marginBottom: 8,
      };
    };

    const getHelperTextStyles = (): TextStyle => {
      return {
        fontSize: 12,
        fontWeight: "500",
        color: isError ? colors.system.red : colors.text.secondary,
        marginTop: 4,
        lineHeight: 18,
      };
    };

    const getCounterStyles = (): TextStyle => {
      return {
        fontSize: 12,
        fontWeight: "500",
        color: colors.text.primary,
        textAlign: "right",
        marginTop: 4,
      };
    };

    const renderLeftIcon = () => {
      if (!leftIcon) return null;

      return (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onLeftIconPress}
          disabled={!onLeftIconPress}
        >
          <Ionicons
            name={leftIcon as any}
            size={16}
            color={disabled ? colors.neutral[500] : colors.text.secondary}
          />
        </TouchableOpacity>
      );
    };

    const renderRightIcon = () => {
      if (!rightIcon && !showClearButton) return null;

      if (showClearButton && currentValue.length > 0) {
        return (
          <TouchableOpacity
            style={[styles.iconContainer, styles.clearButton]}
            onPress={handleClear}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name="close-circle"
              size={16}
              color={disabled ? colors.neutral[500] : colors.text.secondary}
            />
          </TouchableOpacity>
        );
      }

      if (rightIcon) {
        return (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
          >
            <Ionicons
              name={rightIcon as any}
              size={16}
              color={disabled ? colors.neutral[500] : colors.text.secondary}
            />
          </TouchableOpacity>
        );
      }

      return null;
    };

    const renderCharacterCounter = () => {
      if (!showCharacterCounter && !maxLength) return null;

      const currentLength = currentValue.length;
      const maxLen = maxLength || 0;
      const isOverLimit = maxLength && currentLength > maxLength;

      return (
        <Text
          style={[
            getCounterStyles(),
            isOverLimit && { color: colors.system.red },
          ]}
        >
          {currentLength}/{maxLen || "∞"}
        </Text>
      );
    };

    const renderHelperText = () => {
      if (errorMessage) {
        return <Text style={getHelperTextStyles()}>{errorMessage}</Text>;
      }

      if (helperText) {
        return <Text style={getHelperTextStyles()}>{helperText}</Text>;
      }

      return null;
    };

    return (
      <View style={styles.container}>
        {label && (
          <Text style={getLabelStyles()}>
            {label}
            {required && <Text style={{ color: colors.system.red }}> *</Text>}
          </Text>
        )}

        <View style={getContainerStyles()}>
          {renderLeftIcon()}

          <TextInput
            ref={inputRef}
            style={getInputStyles()}
            value={currentValue}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            placeholderTextColor={colors.text.tertiary}
            multiline={isMultiline}
            numberOfLines={isMultiline ? numberOfLines : 1}
            maxLength={maxLength}
            editable={!disabled}
            textAlignVertical={isMultiline ? "top" : "center"}
            {...textInputProps}
          />

          {renderRightIcon()}
        </View>

        {(showCharacterCounter || errorMessage || helperText) && (
          <View style={styles.helperContainer}>
            {renderHelperText()}
            {renderCharacterCounter()}
          </View>
        )}
      </View>
    );
  }
);

TextField.displayName = "TextField";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  iconContainer: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  helperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 4,
  },
});

export default TextField;
