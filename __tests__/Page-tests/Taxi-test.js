/**
 * @format
 */

import 'react-native';
import React from 'react';
import Taxi from '../../comps/Pages/Taxi';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Taxi />);
});
