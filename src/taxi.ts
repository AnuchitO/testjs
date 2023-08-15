export const Taxi = () => 55

export function calculateFare(distance, waitingTime) {
  return 2 * distance + waitingTime
}

export const roundDistance = (distance: number): number => {
  return Math.ceil(distance * 2) / 2
}

export const roundWaitingTime = (waitingTime: number): number => {
  return Math.ceil(waitingTime)
}

export const fare = (distance: number, waitingTime: number): number => {
  return calculateFare(roundDistance(distance), roundWaitingTime(waitingTime))
}
