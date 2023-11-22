import { ServiceDataType } from '../member-datagrid-seed'

export default function getColumnsDefinition(serviceData: ServiceDataType) {
  return [
    {
      dataField: 'member.id',
      visible: false,
    },
    {
      dataField: 'member.membershipNumber',
      caption: 'Nº Socio',
    },
    {
      dataField: 'member.fullName',
      caption: 'Nome Completo',
    },
    {
      dataField: 'member.gender_id',
      caption: 'genero',
      lookup: {
        dataSource: serviceData.getGengerList(),
        valueExpr: 'id',
        displayExpr: 'text',
      },
    },
    {
      dataField: 'member.dateOfBirth',
      caption: 'Data Nascimento',
      visible: false,
    },
    {
      dataField: 'member.nationality_id',
      caption: 'Nacionalidade',
      lookup: {
        dataSource: serviceData.getNacionalitiesList(),
        valueExpr: 'id',
        displayExpr: 'text',
      },
    },
    {
      dataField: 'member.placeOfBirth',
      visible: false,
    },
    {
      dataField: 'member.contact',
      visible: false,
    },
    {
      dataField: 'member.email',
      visible: false,
    },
    {
      dataField: 'memberAddress.address',
      visible: false,
    },
    {
      dataField: 'memberAddress.city',
      visible: false,
    },
    {
      dataField: 'memberAddress.county',
      visible: false,
    },
    {
      dataField: 'memberAddress.parish',
      visible: false,
    },
    {
      dataField: 'memberAddress.postalCode',
      visible: false,
    },
    {
      dataField: 'memberIdentificationDocument.identificationDocument_id',
      caption: 'Doc. Identificação',
      lookup: {
        dataSource: serviceData.getIdentificationDocumentList(),
        valueExpr: 'id',
        displayExpr: 'text',
      },
    },
    {
      dataField: 'memberIdentificationDocument.identificationNumber',
      visible: false,
    },
    {
      dataField: 'memberIdentificationDocument.expireDate',
      visible: false,
    },
    {
      dataField: 'memberIdentificationDocument.taxIdentificationNumber',
      visible: false,
    },
  ]
}
