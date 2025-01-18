import { mount } from '@vue/test-utils'
import Login from '../src/views/login.vue'

test('renders login component', () => {
  const wrapper = mount(Login, {
    global: {
      stubs: {
        'router-link': { template: '<a><slot /></a>' }, // Stub `router-link`
        'router-view': true, // Stub `router-view` if used
      },
    },
  })

  expect(wrapper.exists()).toBe(true)
  expect(wrapper.find('h1').exists()).toBe(true)
  expect(wrapper.find('h1').text()).toBe('Login')
  expect(wrapper.find('button').exists()).toBe(true)
  expect(wrapper.find('button').text()).toBe('Login')
  // test the inputs email and password and their states and validations
  expect(wrapper.find('input[type="email"]').exists()).toBe(true)
  expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  // test to give the inputs some values and check if the values are set
  const emailInput = wrapper.find('input[type="email"]')
  const passwordInput = wrapper.find('input[type="password"]')
  emailInput.setValue('test@example.com')
  passwordInput.setValue('password')
  expect(emailInput.element.value).toBe('test@example.com')
  expect(passwordInput.element.value).toBe('password')
  // test the form submission
  const form = wrapper.find('form')
  form.trigger('submit')
  // test the form submission with invalid values
})
