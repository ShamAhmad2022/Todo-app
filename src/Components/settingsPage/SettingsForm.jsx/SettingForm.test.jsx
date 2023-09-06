import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SettingsForm from './index';
import SettingsContext from '../../../Conext/Settings';

// Mock the SettingsContext
jest.mock('../../../Conext/Settings', () => ({
  SettingsContext: {
    Consumer: ({ children }) => children({
      displayCompletedItem: false,
      numberOfItemsToDisplay: 10,
      sortKeyword: '',
      setDisplayCompletedItem: jest.fn(),
      setnumberOfItemsToDisplay: jest.fn(),
      setSortKeyword: jest.fn(),
    }),
  },
}));

test.skip('SettingsForm renders correctly', () => {
  render(<SettingsForm />);
  
  // Check if form elements are rendered
  expect(screen.getByText('Update settings')).toBeInTheDocument();
  expect(screen.getByText('Show completed ToDos')).toBeInTheDocument();
  expect(screen.getByLabelText('Items per page:')).toBeInTheDocument();
  expect(screen.getByLabelText('Sort KeyWord')).toBeInTheDocument();
  expect(screen.getByText('Update')).toBeInTheDocument();
});

test.skip('SettingsForm handles form submission', () => {
  const { getByText, getByLabelText } = render(<SettingsForm />);
  
  // Simulate user input
  fireEvent.change(screen.getByLabelText('Items per page:'), { target: { value: '20' } });
  fireEvent.change(screen.getByLabelText('Sort KeyWord'), { target: { value: 'Newest' } });
  fireEvent.click(screen.getByLabelText('Show completed ToDos'));
  
  // Simulate form submission
  fireEvent.click(screen.getByText('Update'));
  
  // Check if the form submission functions were called with the expected values
  expect(SettingsContext.setDisplayCompletedItem).toHaveBeenCalledWith(true);
  expect(SettingsContext.setnumberOfItemsToDisplay).toHaveBeenCalledWith('20');
  expect(SettingsContext.setSortKeyword).toHaveBeenCalledWith('Newest');
});
