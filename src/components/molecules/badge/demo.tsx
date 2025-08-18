import { View, StyleSheet } from 'react-native';
import Badge from './index';
import { Paragraph } from '../../atoms';

/**
 * Demo component to showcase all Badge variants
 * This matches the Figma design variations
 */
const BadgeDemo = () => {
  return (
    <View style={styles.container}>
      <Paragraph
        testId="demo-badge-title"
        text="Badge Component Demo"
        size="lg"
        weight="Bold"
        style={styles.title}
      />

      {/* Label variants */}
      <View style={styles.section}>
        <Paragraph
          testId="demo-badge-title-label-variants"
          text="Label Variants"
          weight="Semibold"
          style={styles.sectionTitle}
        />

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="label"
            color="brand"
            size="sm"
            paragraphProps={{
              text: 'عنوان',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="brand"
            size="md"
            paragraphProps={{
              text: 'عنوان',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="brand"
            size="lg"
            paragraphProps={{
              text: 'عنوان',
            }}
          />
        </View>

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="label"
            color="brand"
            size="sm"
            paragraphProps={{
              text: 'Label',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="brand"
            size="md"
            paragraphProps={{
              text: 'Label',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="brand"
            size="lg"
            paragraphProps={{
              text: 'Label',
            }}
          />
        </View>

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="label"
            color="gray"
            size="sm"
            paragraphProps={{
              text: 'Label',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="success"
            size="md"
            paragraphProps={{
              text: 'Label',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="warning"
            size="lg"
            paragraphProps={{
              text: 'Label',
            }}
          />
        </View>

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="label"
            color="error"
            size="sm"
            paragraphProps={{
              text: 'Label',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="error"
            size="md"
            paragraphProps={{
              text: 'Label',
            }}
          />
          <Badge
            testId="demo"
            variant="label"
            color="error"
            size="lg"
            paragraphProps={{
              text: 'Label',
            }}
          />
        </View>
      </View>

      {/* Number variants */}
      <View style={styles.section}>
        <Paragraph
          testId="demo-badge-title-number-variants"
          text="Number Variants"
          weight="Semibold"
          style={styles.sectionTitle}
        />

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="number"
            color="brand"
            size="sm"
            paragraphProps={{
              text: '9',
            }}
          />
          <Badge
            testId="demo"
            variant="number"
            color="brand"
            size="md"
            paragraphProps={{
              text: '9',
            }}
          />
          <Badge
            testId="demo"
            variant="number"
            color="brand"
            size="lg"
            paragraphProps={{
              text: '9',
            }}
          />
        </View>

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="number"
            color="gray"
            size="sm"
            paragraphProps={{
              text: '9',
            }}
          />
          <Badge
            testId="demo"
            variant="number"
            color="success"
            size="md"
            paragraphProps={{
              text: '9',
            }}
          />
          <Badge
            testId="demo"
            variant="number"
            color="warning"
            size="lg"
            paragraphProps={{
              text: '9',
            }}
          />
        </View>

        <View style={styles.row}>
          <Badge
            testId="demo"
            variant="number"
            color="error"
            size="sm"
            paragraphProps={{
              text: '9',
            }}
          />
          <Badge
            testId="demo"
            variant="number"
            color="error"
            size="md"
            paragraphProps={{
              text: '9',
            }}
          />
          <Badge
            testId="demo"
            variant="number"
            color="error"
            size="lg"
            paragraphProps={{
              text: '9',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
  },
});

export default BadgeDemo;
