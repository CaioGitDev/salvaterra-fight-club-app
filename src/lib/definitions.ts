export type OptionLists = {
  id: number
  text: string
}

export type Member = {
  id: string
  membershipNumber?: number
  photoUrl: string
  fullName: string
  gender_id: number
  dateOfBirth: Date
  nationality_id: number
  placeOfBirth: string
  contact: string
  email: string
  createdAt: Date
  updatedAt?: Date
  updatedBy?: string
  active: boolean
}
export type MemberIdentificationDocument = {
  id: string
  member_id: string
  identificationDocument: string
  identificationNumber: string
  expireDate: Date
  taxIdentificationNumber: number
  createdAt: Date
  updatedAt?: Date
  updatedBy?: string
}

export type MemberAdress = {
  id: string
  member_id: string
  address: string
  city: string
  county: string
  parish: string
  postalCode: string
}

export type MemberGuardian = {
  fullName: string
  contact: string
  relationshipDegree: string
  address: string
  city: string
  county: string
  parish: string
  postalCode: string
}

export interface MemberDataInterface {
  member: Member
  memberIdentificationDocument: MemberIdentificationDocument
  memberAdress: MemberAdress
  memberGuardian?: MemberGuardian
}
