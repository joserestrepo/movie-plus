export const formatMinutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const formattedTime = `${hours && `${hours}h`} ${remainingMinutes}m`

  return formattedTime
}
