/**
 * @format
 */

import 'react-native';
import React from 'react';
import FavPage from '../../comps/Pages/FavPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import FavItems from '../../comps/FavItems';

it('renders correctly', () => {
  renderer.create(<FavPage />);
});
