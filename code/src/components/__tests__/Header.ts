import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderLink from '../header/HeaderLink.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderLink, { props: { to: 'Hello Vitest' } })
    expect(wrapper.attributes().to).toContain('Hello Vitest')
  })
})
