import React from 'react';
import { View, StyleSheet } from 'react-native';
import List from './index'; // Adjust import path as needed
import { Paragraph } from '@/components/atoms'; // Assuming Paragraph is available from your atoms

/**
 * Demo component to showcase List states
 * This includes normal, empty, loading, and skeleton variations
 */

// Define a sample item type
type SampleItem = {
  title: string;
};

// Sample data for demonstration
const sampleData: SampleItem[] = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
];

// Sample renderItem function
const renderSampleItem = ({ item }: { item: SampleItem }) => (
  <Paragraph text={item.title} style={styles.itemText} />
);

const ListDemo = () => {
  return (
    <View style={styles.container}>
      <Paragraph
        text="List Component Demo"
        size="lg"
        weight="Bold"
        style={styles.title}
      />

      {/* Normal List */}
      <View style={styles.section}>
        <Paragraph
          text="Normal List"
          weight="Semibold"
          style={styles.sectionTitle}
        />
        <List<SampleItem>
          testId="demo-normal"
          data={sampleData}
          renderItem={renderSampleItem}
          listContainerStyle={styles.listContainer}
          keyField="title"
        />
      </View>

      {/* Empty List */}
      <View style={styles.section}>
        <Paragraph
          text="Empty List"
          weight="Semibold"
          style={styles.sectionTitle}
        />
        <List<SampleItem>
          testId="demo-empty"
          data={[]}
          renderItem={renderSampleItem}
          listContainerStyle={styles.listContainer}
          emptyComponentProps={{ text: 'Noitemsavailable' }}
        />
      </View>

      {/* Skeleton Loading (Initial) */}
      <View style={styles.section}>
        <Paragraph
          text="Skeleton Loading (Initial)"
          weight="Semibold"
          style={styles.sectionTitle}
        />
        <List<SampleItem>
          testId="demo-skeleton-initial"
          data={[]}
          renderItem={renderSampleItem}
          isLoading={true}
          isSkeleton={true}
          loadingItemCount={3}
          listContainerStyle={styles.listContainer}
        />
      </View>

      {/* Load More Spinner */}
      <View style={styles.section}>
        <Paragraph
          text="Load More Spinner"
          weight="Semibold"
          style={styles.sectionTitle}
        />
        <List<SampleItem>
          testId="demo-loadmore-spinner"
          data={sampleData}
          renderItem={renderSampleItem}
          isLoading={true}
          isSkeleton={false}
          listContainerStyle={styles.listContainer}
        />
      </View>

      {/* Load More Skeleton */}
      <View style={styles.section}>
        <Paragraph
          text="Load More Skeleton"
          weight="Semibold"
          style={styles.sectionTitle}
        />
        <List<SampleItem>
          testId="demo-loadmore-skeleton"
          data={sampleData}
          renderItem={renderSampleItem}
          isLoading={true}
          isSkeleton={true}
          loadingItemCount={2}
          listContainerStyle={styles.listContainer}
          keyField="title"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  listContainer: {
    height: 200, // Fixed height for demo purposes; adjust as needed
  },
  itemText: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    borderRadius: 4,
  },
});

export default ListDemo;
