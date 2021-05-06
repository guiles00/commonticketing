export enum OrderStatus {
  // When he order has been created, but the
  // ticket it is trying to order has not been reserved
  Created = "created",
  Cancelled = "cancelled",
  AwaitingPayment = "awaiting:payment",
  Complete = "complete"
}