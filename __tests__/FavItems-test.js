/**
 * @format
 */

import 'react-native';
import React from 'react';
import FavItems from '../comps/FavItems';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<FavItems />);
});
