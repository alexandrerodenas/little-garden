import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Seasons} from "./model/calendar";
import {Food} from "./model/food";

test(`Application is displaying each seasons`, () => {
  render(<App></App>);

  Object.keys(Seasons).forEach(season => {
    expect(screen.getByText(season)).toBeInTheDocument();
  });
});

test(`Application is displaying all food items`, () => {
  render(<App></App>);

  Object.keys(Food).forEach(food => {
    expect(screen.getByText(food)).toBeInTheDocument();
  });
});
