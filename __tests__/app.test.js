import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

beforeEach(() => {
  render (
    <Provider store={store()}>
      <App />
    </Provider>
  );
})

describe('Testing core behaviors of app', () => {
  it('Should properly render components', async () => {
    let header = screen.getByTestId('header');
    let footer = screen.getByTestId('footer');
    let productList = screen.getByTestId('products');
    let categories = screen.getByTestId('categories');


    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(productList).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
  });
});