import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'PKR' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceInUSD: number) => string;
  exchangeRate: number; // 1 USD = 280 PKR
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const EXCHANGE_RATE = 280;

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('barn_currency');
    return (saved as Currency) || 'PKR';
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('barn_currency', c);
  };

  const formatPrice = (priceInUSD: number): string => {
    if (currency === 'PKR') {
      const pkrValue = Math.round(priceInUSD * EXCHANGE_RATE);
      return `Rs. ${pkrValue.toLocaleString()}`;
    }
    return `$${priceInUSD.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, exchangeRate: EXCHANGE_RATE }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
