import { Platform, StyleSheet, Text, View } from 'react-native';
import { useColors } from '@/hooks/useColors';

export default function TabOneScreen() {
  const colors = useColors();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          paddingTop: Platform.OS === 'web' ? 67 : 24,
          paddingBottom: Platform.OS === 'web' ? 34 : 24,
        },
      ]}
    >
      <View style={[styles.mark, { backgroundColor: colors.primary }]}>
        <Text style={styles.markText}>B</Text>
      </View>
      <Text style={[styles.title, { color: colors.foreground }]}>
        BrillPrime
      </Text>
      <Text style={[styles.text, { color: colors.mutedForeground }]}>
        The mobile foundation is ready. Consumer and merchant features will be
        added after your approval.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 14,
  },
  mark: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  markText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  text: {
    maxWidth: 320,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
