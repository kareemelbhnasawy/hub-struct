import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { Page } from '@/components/templates';
import { View } from 'react-native';
import { BaseSheet } from '@/components/molecules';
import { useState } from 'react';
import { SnapPoints } from '@/components/molecules/base-sheet/constants';
import { SearchInput } from '@/components/organisms';
import { Spacer } from '@/components/atoms';
import { List } from '@/components/molecules';
import { SkillItemDataType } from './interface';
import Checkmark from '@/components/molecules/checkmark';
import { log } from '@/utilities';

const MySkillsScreen = () => {
  const screenTestId = 'my-skills-screen';
  const { getThemedStyles } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  const [sheetVisibility, setSheetVisibility] = useState(true);

  const listItemData: SkillItemDataType[] = [
    { title: 'JavaScript', id: '1' },
    { title: 'TypeScript', id: '2' },
    { title: 'React Native', id: '3' },
    { title: 'Node.js', id: '4' },
    { title: 'Python', id: '5' },
    { title: 'Django', id: '6' },
    { title: 'Flutter', id: '7' },
    { title: 'Swift', id: '8' },
    { title: 'Kotlin', id: '9' },
    { title: 'Java', id: '10' },
  ];

  const renderListItem = ({
    item,
    index,
  }: {
    item: SkillItemDataType;
    index: number;
  }) => {
    return (
      <Checkmark
        testId={`${screenTestId}-item-${index}`}
        textProps={{ text: item.title }}
        containerStyle={themedStyles.searchItemContainer}
        onCheck={() => {
          log('Skill selected: ', item.id);
        }}
        onUncheck={() => {
          log('Skill unselected: ', item.id);
        }}
      />
    );
  };

  return (
    <Page
      testId={screenTestId}
      hasHeader={false}
      isLoading={false}
      disableSafeAreaTop={true}>
      <View style={themedStyles.container}>
        <BaseSheet
          testId={screenTestId}
          modalVisible={sheetVisibility}
          setModalVisible={setSheetVisibility}
          titleProps={{ text: 'Add Skills' }}
          headerVariant="centerWithClose"
          hasCloseButton
          snapPoints={SnapPoints.FULL}>
          <SearchInput testId={screenTestId} placeholder="search to add" />
          <Spacer />
          <List<SkillItemDataType>
            testId={screenTestId}
            data={listItemData}
            renderItem={renderListItem}
            keyField="title"
            scrollEnabled={false}
          />
        </BaseSheet>
      </View>
    </Page>
  );
};

export default MySkillsScreen;
