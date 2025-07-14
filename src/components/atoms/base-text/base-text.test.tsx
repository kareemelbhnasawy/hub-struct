// spinner.component.test.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import BaseText from './base-text.component';

test('renders correctly', () => {
  const tree = renderer
    .create(<BaseText testId="text-plain" stringProps={{plainText: 'Plain'}} />)
    .toJSON();
  const treeBaseTextWithTranslation = renderer
    .create(
      <BaseText testId="text-translated" stringProps={{localeKey: 'home'}} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(treeBaseTextWithTranslation).toMatchSnapshot();
});
