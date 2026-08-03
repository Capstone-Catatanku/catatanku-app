import { describe, it, expect } from "vitest";
import { hitungMetrikTabungan } from "@/lib/savingCalculations";

describe("hitungMetrikTabungan", () => {
  it("menghitung progres dengan benar untuk kasus normal", () => {
    const hasil = hitungMetrikTabungan(500_000, 1_000_000, 100_000);

    expect(hasil.progressPercent).toBe(50);
    expect(hasil.remainingAmount).toBe(500_000);
    expect(hasil.estimasiKaliNabung).toBe(5);
  });

  it("progres tetap dihitung walau currentAmount melebihi target", () => {
    const hasil = hitungMetrikTabungan(1_200_000, 1_000_000, 100_000);

    expect(hasil.progressPercent).toBe(120);
    expect(hasil.remainingAmount).toBe(-200_000);
  });

  it("mengembalikan progressPercent 0 kalau targetAmount 0", () => {
    const hasil = hitungMetrikTabungan(0, 0, null);

    expect(hasil.progressPercent).toBe(0);
  });

  it("mengembalikan estimasiKaliNabung null kalau belum ada planAmount", () => {
    const hasil = hitungMetrikTabungan(500_000, 1_000_000, null);

    expect(hasil.estimasiKaliNabung).toBeNull();
  });

  it("mengembalikan estimasiKaliNabung null kalau planAmount 0", () => {
    const hasil = hitungMetrikTabungan(500_000, 1_000_000, 0);

    expect(hasil.estimasiKaliNabung).toBeNull();
  });
});