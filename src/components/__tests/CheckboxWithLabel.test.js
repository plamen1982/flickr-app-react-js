import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from '../CheckboxWithLabel';
import sinon from 'sinon';

Enzyme.configure({adapter: new Adapter()});


it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const stub = sinon.stub().returns('Off')
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});