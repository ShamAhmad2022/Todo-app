// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import List from './List';
// import { SettingsContext } from '../../Conext/Settings';

// // Mock the SettingsContext provider
// const mockSetList = jest.fn();
// const mockList = [
//   {
//     id: 1,
//     text: 'Task 1',
//     assignee: 'John',
//     difficulty: 'Easy',
//     complete: false,
//   },
//   // Add more sample data as needed
// ];

// jest.mock('../../Conext/Settings', () => ({
//   SettingsContext: {
//     Consumer: ({ children }) => children({ list: mockList, setList: mockSetList }),
//   },
// }));

// test.skip('renders a list of tasks', () => {
//   const { getByText } = render(
//     <SettingsContext.Consumer>
//       {(settings) => (
//         <List />
//       )}
//     </SettingsContext.Consumer>
//   );

//   // Check if the task text is displayed
//   expect(getByText('Task 1')).toBeInTheDocument();

//   // Simulate a click on the complete toggle
//   const completeToggle = getByText('Complete: false');
//   fireEvent.click(completeToggle);

//   // You can add more assertions based on your component's behavior
// });
