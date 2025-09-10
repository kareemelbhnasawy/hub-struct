import GlassModalProps from './interface';
import BaseModal from '@/components/atoms/base-modal';
import { GlassContainer } from '@/components/atoms/glass-container';
import { Headline, Spacer } from '@/components/atoms';
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
  const { getThemedStyles } = useThemeStore();
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
          borderRadius={Radius.LG}
          blurAmountIOS={10}>
          <Spacer />

          {headlineProps && (
            <>
              <Headline
                testId={`${testId}-glass-modal`}
                size="xs"
                weight="Semibold"
                {...headlineProps}
              />
              <Spacer />
            </>
          )}
          {paragraphProps && (
            <>
              <Headline
                testId={`${testId}-glass-modal`}
                size="2xs"
                weight="Medium"
                {...paragraphProps}
              />
              <Spacer space="5xl" />
            </>
          )}

          {buttonProps && (
            <>
              <AlertButton
                testId={`${testId}-glass-modal-primary`}
                {...buttonProps}
              />
              <Spacer />
            </>
          )}
          {dangerButtonProps && (
            <>
              <AlertButton
                testId={`${testId}-glass-modal-secondary`}
                variant="destructive"
                {...dangerButtonProps}
              />
              <Spacer />
            </>
          )}
          {secondaryButtonProps && (
            <>
              <AlertButton
                testId={`${testId}-glass-modal-secondary`}
                variant="secondary"
                {...secondaryButtonProps}
              />
              <Spacer />
            </>
          )}
        </GlassContainer>
      </Pressable>
    </BaseModal>
  );
};

export default GlassModal;
