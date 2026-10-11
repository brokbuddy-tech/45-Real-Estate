'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'USD' | 'AED' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const rates: Record<Currency, number> = {
  USD: 1,
  AED: 3.67,
  EUR: 0.92,
};

const symbols: Record<Currency, string> = {
  USD: '$',
  AED: 'AED ',
  EUR: '€',
};

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatPrice = (usdPrice: number) => {
    const converted = usdPrice * rates[currency];
    return `${symbols[currency]}${converted.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
