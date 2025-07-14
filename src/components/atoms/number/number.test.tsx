import React from 'react';
import renderer from 'react-test-renderer';
import Number from './number.component';

test('renders correctly', () => {
  const tree = renderer
    .create(<Number testId="text-plain" number={1000} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
