import { describe, it, expect } from "vitest";
import { isLimitKuota } from "@/lib/deteksiLimitKuota";

describe("isLimitKuota", () => {
  it("mendeteksi kode error 429", () => {
    expect(isLimitKuota("Error 429: too many requests")).toBe(true);
  });

  it("mendeteksi RESOURCE_EXHAUSTED dari Gemini", () => {
    expect(isLimitKuota("Error: RESOURCE_EXHAUSTED")).toBe(true);
  });

  it("mendeteksi kata 'quota' huruf kecil", () => {
    expect(isLimitKuota("you have exceeded your quota")).toBe(true);
  });

  it("mengembalikan false untuk balasan normal", () => {
    expect(isLimitKuota("Halo bro, saldo lu masih aman kok!")).toBe(false);
  });

  it("mengembalikan false untuk string kosong", () => {
    expect(isLimitKuota("")).toBe(false);
  });

  it("TIDAK mendeteksi 'Quota' huruf besar (keterbatasan yang diketahui)", () => {
    expect(isLimitKuota("Your Quota has been exceeded")).toBe(false);
  });
});