import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './index';
import { SettingsContext } from '../../Conext/Settings';

// Mock the SettingsContext
jest.mock('../../Conext/Settings', () => ({
  SettingsContext: {
    Consumer: ({ children }) =>
      children({
        list: [
          {
            id: 1,
            text: 'Task 1',
            assignee: 'John',
            difficulty: 3,
            complete: false,
          },
          {
            id: 2,
            text: 'Task 2',
            assignee: 'Alice',
            difficulty: 2,
            complete: true,
          },
          // Add more sample items as needed
        ],
        numberOfItemsToDisplay: 3,
        currentPage: 1,
        setCurrentPage: jest.fn(),
      }),
  },
}));

test.skip('List component renders correctly', () => {
  render(<List />);
  
  // Check if elements from your component are rendered
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
  expect(screen.getByText('Assigned to: John')).toBeInTheDocument();
  expect(screen.getByText('Assigned to: Alice')).toBeInTheDocument();
  // You can add more checks as needed for your specific component
});

test.skip('Pagination works', () => {
  render(<List />);
  
  // Check if the initial page is set correctly
  expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
  
  // Simulate clicking on the next page button
  fireEvent.click(screen.getByText('Next'));
  
  // Check if the setCurrentPage function was called
  expect(SettingsContext.setCurrentPage).toHaveBeenCalledWith(2);
});
