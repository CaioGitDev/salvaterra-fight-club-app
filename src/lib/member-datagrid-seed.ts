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
      modality_id: 3,
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-02-15'),
      updatedBy: 'admin',
      active: true,
    },
    memberIdentificationDocument: {
      id: '1',
      member_id: '1',
      identificationDocument_id: 2,
      identificationNumber: 'AB123456',
      expireDate: new Date('2025-01-15'),
      taxIdentificationNumber: 67890,
      createdAt: new Date('2022-01-02'),
      updatedAt: new Date('2022-02-10'),
      updatedBy: 'admin',
    },
    memberAddress: {
      id: '1',
      member_id: '1',
      address: '123 Main St',
      city: 'Lisbon',
      county: 'Lisbon',
      parish: 'Parish A',
      postalCode: '12345-678',
    },
    memberGuardian: {
      id: '1',
      member_id: '1',
      fullName: 'Jane Doe',
      contact: '987654321',
      relationshipDegree_id: 2,
      address: '456 Broad St',
      city: 'Lisbon',
      county: 'Lisbon',
      parish: 'Parish B',
      postalCode: '5421-876',
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
      modality_id: 2,
      createdAt: new Date('2022-01-05'),
      updatedAt: new Date('2022-02-20'),
      updatedBy: 'admin',
      active: true,
    },
    memberIdentificationDocument: {
      id: '2',
      member_id: '2',
      identificationDocument_id: 4,
      identificationNumber: 'CD987654',
      expireDate: new Date('2024-08-20'),
      taxIdentificationNumber: 54321,
      createdAt: new Date('2022-01-08'),
      updatedAt: new Date('2022-03-01'),
      updatedBy: 'admin',
    },
    memberAddress: {
      id: '2',
      member_id: '2',
      address: '789 Oak St',
      city: 'New York',
      county: 'Manhattan',
      parish: 'Parish C',
      postalCode: '6790-123',
    },
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

const identificationDocumentList: OptionLists[] = [
  {
    id: 1,
    text: 'Cartão de Cidadão',
  },
  {
    id: 2,
    text: 'Bilhete de identidade',
  },
  {
    id: 3,
    text: 'Cartão de residência',
  },
  {
    id: 4,
    text: 'Passaporte',
  },
  {
    id: 5,
    text: 'Autorização',
  },
  {
    id: 6,
    text: 'Título de residência',
  },
]

const relationshipDegreeList: OptionLists[] = [
  {
    id: 1,
    text: 'Mãe',
  },
  {
    id: 2,
    text: 'Pai',
  },
  {
    id: 3,
    text: 'Irmão',
  },
  {
    id: 4,
    text: 'Irma',
  },
  {
    id: 5,
    text: 'Avó',
  },
  {
    id: 6,
    text: 'Avô',
  },
]

const modalitiesList: OptionLists[] = [
  {
    id: 1,
    text: 'Muay Thai',
  },
  {
    id: 2,
    text: 'Jiu-Jitsu',
  },
  {
    id: 3,
    text: 'Muay Thai/Jiu-Jitsu',
  },
]

export type ServiceDataType = {
  getMembers(): MemberDataInterface[]
  getGengerList(): OptionLists[]
  getNacionalitiesList(): OptionLists[]
  getIdentificationDocumentList(): OptionLists[]
  getRelationshipDegreeListList(): OptionLists[]
  getModalitiesList(): OptionLists[]
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
  getIdentificationDocumentList() {
    return identificationDocumentList
  },
  getRelationshipDegreeListList() {
    return relationshipDegreeList
  },
  getModalitiesList() {
    return modalitiesList
  },
}
