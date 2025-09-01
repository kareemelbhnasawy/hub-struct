import React, { useCallback, useMemo } from 'react';
import { Headline, LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  View,
} from 'react-native';
import { ListProps } from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import BaseButton from '../base-button';

const List = <TItem,>({
  testId,
  renderItem,
  onListItemPress,
  isLoading = false,
  isSkeleton = false,
  listContainerStyle,
  loadingItemCount = 4,
  spacerProps,
  emptyComponentProps,
  errorComponentProps,
  isError,
  keyField,
  ...flashListProps
}: ListProps<TItem>) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);

  const keyExtractor = useCallback(
    (item: TItem, index: number) => {
      if (!keyField) return String(index); // Use index as fallback
      const key = (item as { [key: string]: string })[keyField];
      return key ? String(key) : String(index); // Use index if key is undefined
    },
    [keyField],
  );

  const renderItemFn = (arg: ListRenderItemInfo<TItem>) => (
    <Pressable onPress={() => onListItemPress?.(arg.item)}>
      {renderItem(arg)}
    </Pressable>
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
          <Paragraph testId={`${testId}-list-skeleton`} text="Skeleton" />
        </View>
      )),
    [loadingItemCount, spacerProps, testId],
  );

  const renderListFooter = useCallback(() => {
    if (isLoading) {
      return isSkeleton ? (
        <View>{renderSkeletons}</View> // Wrap in View for better performance
      ) : (
        <ActivityIndicator
          testID={`${testId}-list-loading-indicator`}
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

  const renderEmptyComponent = useCallback(() => {
    if (isLoading) {
      return null;
    }
    const componentProps = isError ? errorComponentProps : emptyComponentProps;

    return (
      <View style={themedStyles.emptyComponentContainer}>
        <LucideIcon
          testId={`${testId}-list-empty`}
          name="ListX"
          size={52}
          color={getThemeColor('foregroundQuinary')}
          {...componentProps?.iconProps}
        />
        <Headline
          style={themedStyles.textAlignCenter}
          testId={`${testId}-list-empty`}
          text="common.noRecords"
          size="2xs"
          weight="Medium"
          {...componentProps?.headlineProps}
        />
        {componentProps?.paragraphProps && (
          <Paragraph
            style={themedStyles.textAlignCenter}
            testId={`${testId}-list-empty`}
            size="xl"
            {...componentProps?.paragraphProps}
          />
        )}
        {componentProps?.buttonProps && (
          <BaseButton
            testId={`${testId}-list-empty`}
            variant="secondary"
            fullWidth={false}
            containerStyle={themedStyles.alignSelfCenter}
            {...componentProps.buttonProps}
          />
        )}
      </View>
    );
  }, [emptyComponentProps, isLoading, testId]);

  return (
    <View testID={`${testId}-list-container`} style={listContainerStyle}>
      <FlatList
        {...flashListProps}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmptyComponent}
        testID={`${testId}-list`}
        renderItem={renderItemFn}
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
        // renderItem={({i})=>}
        /**
         * ListFooterComponent, if showFooter && !isLoading -> show footer
         */
        ListFooterComponent={renderListFooter()}
      />
    </View>
  );
};

export default List;
