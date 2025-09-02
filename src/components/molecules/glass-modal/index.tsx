import GlassModalProps from './interface';
import BaseModal from '@/components/atoms/base-modal';
import { GlassContainer } from '@/components/atoms/glass-container';
import { Headline, Paragraph, Spacer } from '@/components/atoms';
import { Pressable } from 'react-native';
import BaseButton from '../base-button';
import { Radius } from '@/style';
import { useThemeStore } from '@/store/theme';
import styles from './styles';

const GlassModal = ({
  testId,
  headlineProps,
  paragraphProps,
  buttonProps,
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
          borderRadius={Radius.LG}>
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
              <Spacer space="xl" />
            </>
          )}

          {buttonProps && (
            <>
              <BaseButton
                testId={`${testId}-glass-modal-primary`}
                {...buttonProps}
              />
              <Spacer />
            </>
          )}
          {secondaryButtonProps && (
            <BaseButton
              testId={`${testId}-glass-modal-secondary`}
              variant="secondary"
              {...secondaryButtonProps}
            />
          )}
        </GlassContainer>
      </Pressable>
    </BaseModal>
  );
};

export default GlassModal;
