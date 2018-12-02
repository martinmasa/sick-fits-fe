import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Header from '../../components/Header';

describe('<Header />', () => {
  test('should render logo, search + cart', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header-logo')).toBeDefined();
    expect(getByTestId('header-search')).toBeDefined();
    expect(getByTestId('header-cart')).toBeDefined();
  });
});
