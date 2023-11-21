import { MemberDataInterface, OptionLists } from './definitions'

const membersData: MemberDataInterface[] = [
  {
    member: {
      id: '1',
      membershipNumber: 12345,
      photoUrl: 'https://example.com/photo1.jpg',
      fullName: 'John Doe',
      gender_id: 1,
      dateOfBirth: new Date('1990-01-15'),
      nationality_id: 1,
      placeOfBirth: 'Lisbon',
      contact: '123456789',
      email: 'john.doe@example.com',
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-02-15'),
      updatedBy: 'admin',
      active: true,
    },
    memberIdentificationDocument: {
      id: '1',
      member_id: '1',
      identificationDocument: 'Passport',
      identificationNumber: 'AB123456',
      expireDate: new Date('2025-01-15'),
      taxIdentificationNumber: 67890,
      createdAt: new Date('2022-01-02'),
      updatedAt: new Date('2022-02-10'),
      updatedBy: 'admin',
    },
    memberAdress: {
      id: '1',
      member_id: '1',
      address: '123 Main St',
      city: 'Lisbon',
      county: 'Lisbon',
      parish: 'Parish A',
      postalCode: '12345-678',
    },
    memberGuardian: {
      fullName: 'Jane Doe',
      contact: '987654321',
      relationshipDegree: 'Parent',
      address: '456 Broad St',
      city: 'Lisbon',
      county: 'Lisbon',
      parish: 'Parish B',
      postalCode: '54321-876',
    },
  },
  {
    member: {
      id: '2',
      membershipNumber: 54321,
      photoUrl: 'https://example.com/photo2.jpg',
      fullName: 'Alice Smith',
      gender_id: 2,
      dateOfBirth: new Date('1985-08-20'),
      nationality_id: 3,
      placeOfBirth: 'New York',
      contact: '987654321',
      email: 'alice.smith@example.com',
      createdAt: new Date('2022-01-05'),
      updatedAt: new Date('2022-02-20'),
      updatedBy: 'admin',
      active: true,
    },
    memberIdentificationDocument: {
      id: '2',
      member_id: '2',
      identificationDocument: 'ID Card',
      identificationNumber: 'CD987654',
      expireDate: new Date('2024-08-20'),
      taxIdentificationNumber: 54321,
      createdAt: new Date('2022-01-08'),
      updatedAt: new Date('2022-03-01'),
      updatedBy: 'admin',
    },
    memberAdress: {
      id: '2',
      member_id: '2',
      address: '789 Oak St',
      city: 'New York',
      county: 'Manhattan',
      parish: 'Parish C',
      postalCode: '67890-123',
    },
    // No guardian for this member
  },
]

const gengerList: OptionLists[] = [
  {
    id: 1,
    text: 'Homem',
  },
  {
    id: 2,
    text: 'Mulher',
  },
  {
    id: 3,
    text: 'Outro',
  },
]

const nacionalitiesList: OptionLists[] = [
  {
    id: 1,
    text: 'Português',
  },
  {
    id: 2,
    text: 'Brasileiro',
  },
  {
    id: 3,
    text: 'Inglês',
  },
  {
    id: 4,
    text: 'Ucraniano',
  },
  {
    id: 5,
    text: 'Espanhol',
  },
  {
    id: 6,
    text: 'Alemão',
  },
  {
    id: 7,
    text: 'Marroquino',
  },
  {
    id: 8,
    text: 'Russo',
  },
]

export type ServiceDataType = {
  getMembers(): MemberDataInterface[]
  getGengerList(): OptionLists[]
  getNacionalitiesList(): OptionLists[]
}

export const serviceData: ServiceDataType = {
  getMembers() {
    return membersData
  },
  getGengerList() {
    return gengerList
  },
  getNacionalitiesList() {
    return nacionalitiesList
  },
}
