import { Paragraph } from '@/components/atoms';
import ActionMenuProps from './interface';
import { BaseSheet, List } from '@/components/molecules';

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
      testId={`${testId}-action-menu`}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      enableDynamicSizing={false}
      {...bottomSheetProps}>
      <List
        testId={`${testId}-action-menu`}
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
