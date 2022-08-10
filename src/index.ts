import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BDzdisPF3L41vnNfLFwSKExmwqQFncWkqfLWADaiSgLa'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '4rvYWYGG3EqnRhrdbgvTMS2bfpPkzZnzLodZBRJ8pJF8'
);
