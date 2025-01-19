import { vi, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SignUp from '../src/views/SignUp.vue';
import apiClient from '../src/util/apiClient';

// Mocking the apiClient
vi.mock('../src/util/apiClient', () => ({
  default: {
    post: vi.fn(), // Will mock this below
  },
}));

test('renders SignUp component and submits form', async () => {
  // Define mock implementation for the POST request
  apiClient.post.mockResolvedValue({
    data: { message: 'User registered successfully!' },
  });

  const wrapper = mount(SignUp, {
    global: {
      stubs: {
        'router-link': { template: '<a><slot /></a>' },
        'router-view': true,
      },
    },
  });

  // Ensure the SignUp component renders correctly
  expect(wrapper.text()).toContain('Sign Up');
  expect(wrapper.find('form').exists()).toBe(true);

  const firstNameInput = wrapper.find('input[name="firstName"]');
  const lastNameInput = wrapper.find('input[name="lastName"]');
  const emailInput = wrapper.find('input[type="email"]');
  const passwordInput = wrapper.find('input[type="password"]');

  firstNameInput.setValue('John');
  lastNameInput.setValue('Doe');
  emailInput.setValue('test@example.com');
  passwordInput.setValue('password');

  expect(firstNameInput.element.value).toBe('John');
  expect(lastNameInput.element.value).toBe('Doe');
  expect(emailInput.element.value).toBe('test@example.com');
  expect(passwordInput.element.value).toBe('password');

  const form = wrapper.find('form');
  await form.trigger('submit');

  // Assert that the mock API was called with the correct data
  expect(apiClient.post).toHaveBeenCalledWith('/auth/register', {
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@example.com',
    password: 'password',
  });

  // Optionally verify mock behavior after submission
  expect(apiClient.post).toHaveBeenCalledTimes(1);
});
