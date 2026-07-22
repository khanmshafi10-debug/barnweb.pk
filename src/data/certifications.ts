import { LabCertificate } from '../types';

export const LAB_CERTIFICATES: LabCertificate[] = [
  {
    id: 'cert-sidr-092',
    batchNumber: 'BN-SIDR-2026-04',
    productName: 'Raw Organic Sidr Honey',
    testDate: 'June 14, 2026',
    labName: 'PCSIR National Chemistry Labs & Eurofins Accredited',
    purityScore: '99.8% Monofloral Purity',
    keyMetrics: [
      { label: 'C4 Sugar Additive Test', value: 'ND (Not Detected 0.0%)', status: 'Optimal' },
      { label: 'Pollen Analysis Ratio', value: '88% Ziziphus spina-christi', status: 'Pass' },
      { label: 'HMF Moisture Index', value: '14.2mg/kg (Below ISO 40 limit)', status: 'Optimal' },
      { label: 'Diastase Enzyme Activity', value: '28.4 DN Units', status: 'Pass' },
      { label: 'Pesticide & Heavy Metal Residue', value: '0.00 ppm Clean', status: 'Optimal' }
    ]
  },
  {
    id: 'cert-shilajit-118',
    batchNumber: 'BN-SHIL-2026-02',
    productName: 'Pure Himalayan Shilajit Resin',
    testDate: 'May 28, 2026',
    labName: 'SGS International Mineral Testing Facility',
    purityScore: '64.2% Bioactive Fulvic Acid',
    keyMetrics: [
      { label: 'Fulvic Acid Concentration', value: '64.2% w/w (Industry Lead)', status: 'Optimal' },
      { label: 'Ionic Trace Minerals', value: '85+ Elemental Ions', status: 'Pass' },
      { label: 'Lead (Pb) & Mercury (Hg)', value: '< 0.01 ppm (US Pharmacopeia Standard)', status: 'Optimal' },
      { label: 'Solvent & Ethanol Residue', value: '100% Water Purified (Zero Solvents)', status: 'Pass' }
    ]
  },
  {
    id: 'cert-rosemary-045',
    batchNumber: 'BN-ROSE-2026-05',
    productName: 'Cold-Pressed Rosemary Hair Serum',
    testDate: 'July 02, 2026',
    labName: 'Quality Control Standards Pakistan (ISO 17025 Certified)',
    purityScore: '100% Organic Solvent Free',
    keyMetrics: [
      { label: '1,8-Cineole Active Compound', value: '42.8% (Maximum Follicle Stimulation)', status: 'Optimal' },
      { label: 'Peroxide Value (Freshness)', value: '1.8 meq/kg', status: 'Pass' },
      { label: 'Microbial Load Count', value: 'Zero Colony Forming Units', status: 'Optimal' }
    ]
  }
];
