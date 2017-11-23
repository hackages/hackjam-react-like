import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import fs from 'fs';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should be able to open the sidebar filters', () => {
  const wrapper = mount(<App />);
  wrapper.find('.filter-trigger').simulate('click');
  expect(wrapper.find('.filter .filter-is-visible').length).toEqual(1);
});

it('should be able to close the sidebar filters', () => {
  const wrapper = mount(<App />);
  wrapper.find('.filter-trigger').simulate('click');
  expect(wrapper.find('.filter .filter-is-visible').length).toEqual(1);
  wrapper.find('.close').simulate('click');
  expect(wrapper.find('.filter .filter-is-visible').length).toEqual(0);
});

it('should be able to change the selected category', () => {
  const wrapper = mount(<App />);
  const first = wrapper.find('li > a').at(1);
  first.simulate('click');
  expect(wrapper.find('li > a.selected').text()).toEqual(wrapper.find('li > a').at(1).text());
});

it('should filter with the input', () => {
  const wrapper = mount(<App />);
  wrapper.find('input').simulate('change', {target: {value: 'an'}});
  expect(wrapper.find('section.gallery li').length).toEqual(3);
});

it('should filter with input and category', () => {
  const wrapper = mount(<App />);
  wrapper.find('input').simulate('change', {target: {value: 'an'}});
  wrapper.find('li > a').at(2).simulate('click');
  expect(wrapper.find('section.gallery li').length).toEqual(2);
});

it('should filter with category then input', () => {
  const wrapper = mount(<App />);
  wrapper.find('li > a').at(2).simulate('click');
  wrapper.find('input').simulate('change', {target: {value: 'an'}});
  expect(wrapper.find('section.gallery li').length).toEqual(2);
});

it('should have a lot of components', (done) => {
  expect.assertions(1);
  fs.readdir(__dirname + '/components', (_, data) => {
    expect(data.length > 5).toEqual(true);
    done();
  });
});
