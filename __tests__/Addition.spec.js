import { mount } from '@vue/test-utils'
import App from './../src/components/Addition.vue'

describe('App', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})
