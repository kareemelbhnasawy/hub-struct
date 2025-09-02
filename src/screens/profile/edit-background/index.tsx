import React, { useState } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import Page from '@/components/templates/page';
import { LucideIcon, Paragraph, Spacer } from '@/components/atoms';
import { List, ToastService } from '@/components/molecules';
import { useThemeStore } from '@/store/theme';
import { useNavigation } from '@/hooks';
import styles from './styles';
import { BACKGROUND_OPTIONS } from './constants';
import useUpdateBanner from '@/network/services/profile/banner/banner.hook';
import { useAuthStore } from '@/store/auth';
import { useProfileStore } from '@/store/profile';

const EditBackgroundScreen = () => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const { setBannerId, getBannerId } = useProfileStore();
  const themedStyles = getThemedStyles(styles);
  const { email } = useAuthStore();
  const { goBack } = useNavigation();

  // Track the selected image id
  const [selectedId, setSelectedId] = useState<string>(getBannerId());

  const [isLocked, setIsLocked] = useState(false);

  const onBannerSuccess = () => {
    setBannerId(selectedId);
    ToastService.success({
      props: {
        messageProps: { text: 'profileDetails.editBackgroundSuccess' },
        testId: 'background-banner',
      },
    });
    goBack();
  };

  const { mutate: updateBanner } = useUpdateBanner(onBannerSuccess);

  // Handle selection: set the selected id, lock UI, wait for animation, then go back
  const handleSelect = (id: string) => {
    if (isLocked) return;
    setSelectedId(id);
    setIsLocked(true);
    setTimeout(() => {
      updateBanner({ bannerId: id, email });
    }, 1000); // 1000ms for animation, adjust as needed
  };

  // Render each item in the grid; highlight it when selected
  const renderItem = ({
    item,
  }: {
    item: { id: string; source: unknown };
    index: number;
  }) => {
    const isSelected = item.id === selectedId;
    return (
      <>
        <View>
          <Pressable
            onPress={() => handleSelect(item.id)}
            disabled={isLocked}
            style={[
              themedStyles.itemWrapper,
              isSelected && themedStyles.selected,
            ]}>
            <ImageBackground source={item.source} style={themedStyles.image}>
              <View style={isSelected && themedStyles.blurView}>
                {isSelected && (
                  <LucideIcon
                    testId={`background-lucide-${item.id}`}
                    name="CircleCheck"
                    color={getThemeColor('backgroundSuccessLight')}
                    size={42}
                  />
                )}
              </View>
            </ImageBackground>
          </Pressable>
        </View>
        <Spacer space={16} />
      </>
    );
  };

  return (
    <Page
      testId="edit-background-screen"
      hasHeader
      isLoading={false}
      pageHeaderProps={{
        isTitleCentered: true,
        titleProps: { text: 'profileDetails.editBackgroundTitle' },
      }}>
      <View
        style={themedStyles.container}
        pointerEvents={isLocked ? 'none' : 'auto'}>
        {/* Title and subtitle follow the same pattern as your existing screens */}
        <Paragraph
          text="profileDetails.editBackgroundDesc"
          weight="Medium"
          size="xl"
          testId="edit-background-screen"
        />
        <Spacer space={12} />
        <List
          testId="edit-background-screen"
          data={BACKGROUND_OPTIONS}
          renderItem={renderItem}
          numColumns={2}
          keyField="id"
          scrollEnabled={false}
          columnWrapperStyle={themedStyles.gap}
        />
      </View>
    </Page>
  );
};

export default EditBackgroundScreen;
