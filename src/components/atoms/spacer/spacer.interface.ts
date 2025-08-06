type SpacingValue =
  | number
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | '10xl'
  | '11xl';

interface SpacerProps {
  space?: SpacingValue;
  divider?: boolean;
  spaceTop?: SpacingValue;
  spaceBottom?: SpacingValue;
}

export default SpacerProps;
