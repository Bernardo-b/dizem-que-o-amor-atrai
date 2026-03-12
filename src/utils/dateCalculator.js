// Utilitário para calcular tempo juntos

export function calculateDaysTogether(startDate) {
  const today = new Date()
  const start = new Date(startDate)
  const diffTime = Math.abs(today - start)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function calculateMonthsTogether(startDate) {
  const today = new Date()
  const start = new Date(startDate)

  let months = (today.getFullYear() - start.getFullYear()) * 12
  months -= start.getMonth()
  months += today.getMonth()

  return months <= 0 ? 0 : months
}

export function formatDuration(startDate) {
  const months = calculateMonthsTogether(startDate)
  const days = calculateDaysTogether(startDate)

  if (months < 12) {
    return `${months} ${months === 1 ? 'mês' : 'meses'}`
  } else {
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'ano' : 'anos'}`
    } else {
      return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`
    }
  }
}

export function calculateDetailedTime(startDate) {
  const now = new Date()
  const start = new Date(startDate)

  let diff = Math.abs(now - start)

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  let remaining = diff - (years * (1000 * 60 * 60 * 24 * 365))

  const months = Math.floor(remaining / (1000 * 60 * 60 * 24 * 30))
  remaining -= months * (1000 * 60 * 60 * 24 * 30)

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24))

  // Totais
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  const totalHours = Math.floor(diff / (1000 * 60 * 60))
  const totalMinutes = Math.floor(diff / (1000 * 60))
  const totalSeconds = Math.floor(diff / 1000)

  return {
    years,
    months,
    days,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds
  }
}
