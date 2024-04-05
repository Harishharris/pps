const companies = [
  {
    name: 'Apple',
    role: 'CEO',
    CTC: '10_000_000',
    mode: 'Office',
    skills: ['ancj'],
  },
  {
    name: 'Google',
    role: 'VP of Engineering',
    CTC: '10_000',
    mode: 'Office',
    skills: ['ancj'],
  },
  {
    name: 'Microsoft',
    role: 'CEO',
    CTC: '10_000_000',
    mode: 'Office',
    skills: ['ancj'],
  },
];

export function getAllCompanies() {
  return companies;
}

export function addNewCompany(data) {
  companies.push(data);
}
