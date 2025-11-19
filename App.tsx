import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
  useColorScheme,
  Linking,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setTitle } from './src/utils/title';
import { showToast, vibrate, share } from './src/utils/native';

function App(): React.JSX.Element {
  const isDark = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useMemo(() => {
    setTitle('Banjo Hootson');
  }, []);

  const colors = useMemo(
    () => ({
      bg: isDark ? '#0B1020' : '#F6F8FF',
      card: isDark ? '#121A2A' : '#FFFFFF',
      text: isDark ? '#E6EDF3' : '#0B1020',
      sub: isDark ? '#9BA7B4' : '#344054',
      accent: '#5B8DEF',
    }),
    [isDark],
  );

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[styles.fill, { backgroundColor: colors.bg }]}>
        <View style={[styles.container]}>
          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.card,
                borderColor: isDark ? '#1F2A44' : '#E5E7EB',
              },
            ]}
          >
            <Text style={[styles.title, { color: colors.text }]}>
              Banjo Hootson
            </Text>
            <Text style={[styles.subtitle, { color: colors.sub }]}>
              Cross-platform starter (Android • iOS • Web)
            </Text>

            <View style={styles.row}>
              <Pressable
                accessibilityRole="button"
                onPress={() => setCount(c => c + 1)}
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? '#4778e6' : colors.accent },
                ]}
              >
                <Text style={styles.buttonText}>Tap Count: {count}</Text>
              </Pressable>
            </View>

            <View style={styles.inputWrap}>
              <Text style={[styles.label, { color: colors.sub }]}>
                Your name
              </Text>
              <TextInput
                placeholder="Type here..."
                placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                value={name}
                onChangeText={setName}
                style={[
                  styles.input,
                  {
                    color: colors.text,
                    borderColor: isDark ? '#22314e' : '#D1D5DB',
                  },
                ]}
              />
              {!!name && (
                <Text style={[styles.greeting, { color: colors.text }]}>
                  Hello, {name} 👋
                </Text>
              )}
            </View>

            <View style={styles.meta}>
              <Text style={[styles.metaLine, { color: colors.sub }]}>
                Platform: {Platform.OS}
              </Text>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://reactnative.dev/docs/environment-setup',
                  )
                }
              >
                <Text style={[styles.link]}>Environment setup guide</Text>
              </Pressable>
            </View>

            <View style={[styles.actions]}>
              <Text style={[styles.actionsTitle, { color: colors.text }]}>
                Device actions
              </Text>
              <View style={styles.row}>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => showToast('Hello from native action!')}
                  style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#4778e6' : colors.accent },
                  ]}
                >
                  <Text style={styles.buttonText}>Show Toast</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => vibrate([50, 50, 150])}
                  style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#4778e6' : colors.accent },
                  ]}
                >
                  <Text style={styles.buttonText}>Vibrate</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => share('Banjo Hootson says hello 👋')}
                  style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#4778e6' : colors.accent },
                  ]}
                >
                  <Text style={styles.buttonText}>Share</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <Text style={[styles.footer, { color: colors.sub }]}>
            Vite powers the web build via react-native-web.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 720,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
  },
  title: { fontSize: 28, fontWeight: '700', letterSpacing: 0.3 },
  subtitle: { marginTop: 4, fontSize: 14 },
  row: { flexDirection: 'row', gap: 12, marginTop: 16 },
  button: { paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12 },
  buttonText: { color: '#fff', fontWeight: '600' },
  inputWrap: { marginTop: 20 },
  label: { fontSize: 12, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  greeting: { marginTop: 10, fontSize: 16, fontWeight: '600' },
  meta: { marginTop: 20, gap: 8 },
  metaLine: { fontSize: 12 },
  link: { color: '#5B8DEF', fontWeight: '600' },
  footer: { marginTop: 24, fontSize: 12 },
  actions: { marginTop: 24 },
  actionsTitle: { fontSize: 16, fontWeight: '700' },
});

export default App;
