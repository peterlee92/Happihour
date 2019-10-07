/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProfilePage from '../../comps/Pages/ProfilePage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ProfilePage />);
});
