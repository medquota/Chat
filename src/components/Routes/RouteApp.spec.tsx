import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './RouteApp';

describe('RouteApp', () => {
  it('should render Home component for the root path', () => {
    render(
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('should render Messages component for the messages path', () => {
    const messageId = '123';
    render(
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    );
    expect(screen.queryByText(/messages/i)).not.toBeInTheDocument();

    const messagesPath = `/messages/${messageId}`;
    window.history.pushState({}, 'Test page', messagesPath);
    expect(screen.getByText(/messages/i)).toBeInTheDocument();
  });
});
