import React, { useCallback, useMemo } from 'react';
import { FlashList } from '@shopify/flash-list';
import { Paragraph, Spacer } from '@/components/atoms';
import { ActivityIndicator, View } from 'react-native';
import { ListProps } from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

const List = <TItem,>({
  testId,
  renderItem,
  isLoading = false,
  isSkeleton = false,
  listContainerStyle,
  loadingItemCount = 4,
  spacerProps,
  emptyComponentProps,
  keyField,
  ...flashListProps
}: ListProps<TItem>) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const keyExtractor = useCallback(
    (item: TItem, index: number) => {
      if (!keyField) return String(index); // Use index as fallback
      const key = (item as { [key: string]: string })[keyField];
      return key ? String(key) : String(index); // Use index if key is undefined
    },
    [keyField],
  );

  const renderSpacer = useCallback(
    () => <Spacer {...spacerProps} />,
    [spacerProps],
  );

  const renderSkeletons = useMemo(
    () =>
      Array.from({ length: loadingItemCount }, (_, index) => (
        <View key={`skeleton-${index}`}>
          <Spacer {...spacerProps} />
          {/* Render Array of Skeleton Skeleton Component with its props for now it is a dummy paragraph */}
          <Paragraph text="Skeleton" />
        </View>
      )),
    [loadingItemCount, testId],
  );

  const renderListFooter = useCallback(() => {
    if (isLoading) {
      return isSkeleton ? (
        <View>{renderSkeletons}</View> // Wrap in View for better performance
      ) : (
        <ActivityIndicator
          testID={`${testId}-flash-list-loading-more-data-indicator`}
          style={themedStyles.loadMoreSpinnerStyle}
        />
      );
    }
    return flashListProps.ListFooterComponent;
  }, [
    flashListProps.ListFooterComponent,
    isLoading,
    isSkeleton,
    renderSkeletons,
    testId,
    themedStyles.loadMoreSpinnerStyle,
  ]);

  const renderEmptyComponent = useCallback(
    () =>
      isLoading ? null : (
        // Dummy Empty Component To Be Changed With The Design Empty Component
        <Paragraph
          testID={`${testId}-flash-list`}
          style={themedStyles.defaultEmptyComponentStyle}
          {...emptyComponentProps}
          text="Empty Component"
        />
      ),
    [
      emptyComponentProps,
      isLoading,
      testId,
      themedStyles.defaultEmptyComponentStyle,
    ],
  );

  return (
    <View style={listContainerStyle}>
      <FlashList
        {...flashListProps}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyComponent}
        testID={`${testId}-flash-list`}
        /**
         * Item separator, if not specified from consumer, a default is used
         */
        ItemSeparatorComponent={
          flashListProps.ItemSeparatorComponent ?? renderSpacer
        }
        /**
         * renderItem is always passed by the consumer
         * it is then passed as renderContent prop to ListItem
         */
        renderItem={({ item, index }) =>
          renderItem({
            index,
            item,
          })
        }
        /**
         * ListFooterComponent, if showFooter && !isLoading -> show footer
         */
        ListFooterComponent={renderListFooter()}
      />
    </View>
  );
};

export default List;
