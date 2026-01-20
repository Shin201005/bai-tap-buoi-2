import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [phone, setPhone] = useState("");

  const isValid = useMemo(() => {
    // Tối thiểu 9 số, tối đa 11 số (bạn có thể chỉnh theo yêu cầu)
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 9 && digits.length <= 11;
  }, [phone]);

  const onChangePhone = (text) => {
    // Chỉ cho nhập số
    const digitsOnly = text.replace(/[^\d]/g, "");
    setPhone(digitsOnly);
  };

  const handleContinue = () => {
    // Demo: bạn có thể điều hướng sang màn hình OTP sau này
    alert(`SĐT: ${phone}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.safe}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Đăng nhập</Text>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Nhập số điện thoại</Text>
            <Text style={styles.sectionDesc}>
              Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
              OneHousing Pro
            </Text>

            <TextInput
              value={phone}
              onChangeText={onChangePhone}
              placeholder="Nhập số điện thoại của bạn"
              keyboardType="number-pad"
              maxLength={11}
              style={styles.input}
              placeholderTextColor="#9AA0A6"
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isValid}
            onPress={handleContinue}
            style={[styles.button, !isValid && styles.buttonDisabled]}
          >
            <Text style={[styles.buttonText, !isValid && styles.buttonTextDisabled]}>
              Tiếp tục
            </Text>
          </TouchableOpacity>

          <Text style={styles.hint}>
            Nhập 9–11 chữ số để bật nút “Tiếp tục”.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 18,
  },
  card: {
    paddingVertical: 8,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  sectionDesc: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6B7280",
    marginBottom: 16,
    maxWidth: 330,
  },
  input: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    fontSize: 16,
    color: "#111827",
    paddingVertical: 8,
  },
  button: {
    height: 48,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    backgroundColor: "#E5E7EB",
    opacity: 0.75,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  buttonTextDisabled: {
    color: "#9CA3AF",
  },
  hint: {
    marginTop: 10,
    fontSize: 12,
    color: "#9CA3AF",
  },
});
