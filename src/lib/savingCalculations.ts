export function hitungMetrikTabungan(
  currentAmount: number,
  targetAmount: number,
  planAmount?: number | null
) {
  const progressPercent =
    targetAmount > 0
      ? Math.round((currentAmount / targetAmount) * 100)
      : 0;

  const remainingAmount = targetAmount - currentAmount;

  const estimasiKaliNabung =
    planAmount && planAmount > 0
      ? Math.ceil((targetAmount - currentAmount) / planAmount)
      : null;

  return {
    progressPercent,
    remainingAmount,
    estimasiKaliNabung,
  };
}