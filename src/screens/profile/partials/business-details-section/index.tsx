import React from 'react';
import { View } from 'react-native';
import { Spacer, MapWebView } from '@/components/atoms';
import { DescriptiveIcon } from '@/components/molecules';
import { DetailsSection } from '@/components/organisms';
import BusinessDetailsSectionProps from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';

const BusinessDetailsSection = ({
  testId,
  sections,
  map,
  containerStyle,
  sectionSpacing = '4xl',
}: BusinessDetailsSectionProps) => {
  const { getThemedStyles } = useThemeStore();
  const themedStyle = getThemedStyles(styles);

  return (
    <View style={[themedStyle.pagePadding, containerStyle]}>
      {sections.map((section, index) => (
        <View key={section.key}>
          <DetailsSection
            testId={`${testId}-${section.key}`}
            title={section.title}
            icon={section.icon}
            iconContainerStyle={section.iconContainerStyle}
            data={section.data}
            renderItem={section.renderItem}
          />
          {index !== sections.length - 1 && <Spacer space={sectionSpacing} />}
        </View>
      ))}

      {map && (
        <View>
          <Spacer space={sectionSpacing} />
          {(map.title || map.icon) && (
            <DescriptiveIcon
              testId={`${testId}-map-header`}
              iconProps={{
                name: map.icon ?? 'MapPin',
                size: 18,
                isCircle: true,
                containerStyle: map.iconContainerStyle,
              }}
              textProps={{
                text: map.title ?? 'موقع العمل',
                size: '2xs',
                weight: 'Medium',
              }}
            />
          )}
          {(map.title || map.icon) && <Spacer space={'xl'} />}
          <MapWebView
            testId={`${testId}-map`}
            latitude={map.latitude}
            longitude={map.longitude}
            containerStyle={[themedStyle.mapViewHeight, map.containerStyle]}
          />
        </View>
      )}
    </View>
  );
};

export default BusinessDetailsSection;
