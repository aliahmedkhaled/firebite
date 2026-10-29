import { useEffect } from 'react'
import { useCart } from '../cart/useCart'

// لما السلة تتفتح: الصفحة اللي وراها متتفاعلش بالكيبورد ومتسكرولش
export default function BackgroundLock() {
  const { isOpen } = useCart()

  useEffect(() => {
    const content = document.getElementById('app-content')
    content?.toggleAttribute('inert', isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      content?.removeAttribute('inert')
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return null
}