import GlassModalProps from './interface';
import BaseModal from '@/components/atoms/base-modal';
import { GlassContainer } from '@/components/atoms/glass-container';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { Pressable } from 'react-native';
import { Radius } from '@/style';
import { useThemeStore } from '@/store/theme';
import styles from './styles';
import AlertButton from '../alert-button';

const GlassModal = ({
  testId,
  headlineProps,
  paragraphProps,
  buttonProps,
  dangerButtonProps,
  secondaryButtonProps,
  ...props
}: GlassModalProps) => {
  const { getThemedStyles, getThemeColor } = useThemeStore();
  const themedStyles = getThemedStyles(styles);
  return (
    <BaseModal
      testId={`${testId}-glass`}
      {...props}
      transparent
      animationType="fade">
      <Pressable style={themedStyles.backdrop}>
        <GlassContainer
          testId={`${testId}-modal`}
          containerStyle={themedStyles.glassContainer}
          isContentCentered={false}
          borderRadius={Radius.XL}
          blurAmountIOS={10}
          blurAmountAndroid={14}
          isModal
          blurOverlayColor={getThemeColor('alphaBlack20')}>
          <Spacer />

          {headlineProps && (
            <>
              <Headline
                testId={`${testId}-glass-modal`}
                size="sm"
                weight="Semibold"
                {...headlineProps}
              />
              <Spacer />
            </>
          )}
          {paragraphProps && (
            <>
              <Paragraph
                testId={`${testId}-glass-modal`}
                size="xl"
                weight="Medium"
                {...paragraphProps}
              />
              <Spacer />
            </>
          )}
          <Spacer space="3xl" />
          {buttonProps && (
            <>
              <AlertButton
                testId={`${testId}-glass-modal-primary`}
                {...buttonProps}
              />
              <Spacer space={'lg'} />
            </>
          )}
          {dangerButtonProps && (
            <>
              <AlertButton
                testId={`${testId}-glass-modal-secondary`}
                variant="destructive"
                {...dangerButtonProps}
              />
              <Spacer space={'lg'} />
            </>
          )}
          {secondaryButtonProps && (
            <>
              <AlertButton
                testId={`${testId}-glass-modal-secondary`}
                variant="secondary"
                {...secondaryButtonProps}
              />
              <Spacer space={'lg'} />
            </>
          )}
        </GlassContainer>
      </Pressable>
    </BaseModal>
  );
};

export default GlassModal;
