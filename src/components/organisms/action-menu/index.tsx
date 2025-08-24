import BaseSheet from '@/components/molecules/base-sheet';
import List from '@/components/molecules/list';
import { Paragraph } from '@/components/atoms';
import ActionMenuProps from './interface';

const ActionMenu = ({
  testId,
  onSelect,
  items = [],
  labelKey = 'label',
  valueKey = 'value',
  closeModalOnSelect = true,
  modalVisible,
  setModalVisible,
  listProps,
  ...bottomSheetProps
}: ActionMenuProps) => {
  const handleOnSelect = (item: object) => {
    if (item && item?.[valueKey]) {
      onSelect?.(item?.[valueKey]);
    }
    if (closeModalOnSelect) {
      setModalVisible(false);
    }
  };

  const renderItem = ({ item, index }: { item: object; index: number }) => (
    <Paragraph
      onPress={() => handleOnSelect(item)}
      testId={`${testId}-link-button-${index}`}
      text={item?.[labelKey]}
    />
  );

  return (
    <BaseSheet
      testId={testId}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      enableDynamicSizing={false}
      {...bottomSheetProps}>
      <List
        testId={''}
        renderItem={renderItem}
        data={items}
        scrollEnabled={false}
        keyField={valueKey}
        spacerProps={{ isDivider: true }}
        {...listProps}
      />
    </BaseSheet>
  );
};

export default ActionMenu;
