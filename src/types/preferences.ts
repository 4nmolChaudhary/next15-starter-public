export interface Unit {
  type: 'weight' | 'length'
  label: string
  value: number
}
export interface UserPreference {
  id: number
  restTimer: number
}
