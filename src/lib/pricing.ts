import { restaurant } from '../config/restaurant'

export function calcTotals(subtotal: number) {
  const delivery =
    subtotal === 0 || subtotal >= restaurant.freeDeliveryFrom ? 0 : restaurant.deliveryFee

  return {
    subtotal,
    delivery,
    total: subtotal + delivery,
    meetsMin: subtotal >= restaurant.minOrder,
    remainingForFree: Math.max(restaurant.freeDeliveryFrom - subtotal, 0),
  }
}