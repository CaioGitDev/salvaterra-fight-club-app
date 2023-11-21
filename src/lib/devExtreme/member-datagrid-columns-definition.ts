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
      dataField: 'memberIdentificationDocument.identificationDocument',
      caption: 'Doc. Identificação',
    },
  ]
}
