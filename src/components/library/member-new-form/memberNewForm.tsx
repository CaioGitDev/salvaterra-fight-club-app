import { MemberDataInterface } from '@/lib/definitions'
import { Form, SelectBox } from 'devextreme-react'
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import { serviceData } from '@/lib/member-datagrid-seed'
import {
  EmailRule,
  Item,
  PatternRule,
  RequiredRule,
  StringLengthRule,
} from 'devextreme-react/form'

type MemberNewFormProps = {
  data?: MemberDataInterface
}

const datepickOptions = {
  displayFormat: 'yyyy-MM-dd',
  openOnFieldClick: true,
  pickerType: 'calendar',
}

const phoneNumberOptions = {
  mask: '+351 000000000',
  maskRules: {
    X: /^\+3519[1236]\d{7}$/,
  },
  maskInvalidMessage: 'Número de telemovel deve ter o formato correto',
}

const postalCodeOptions = {
  mask: '0000-000',
  maskRules: {
    X: /^\d{4}-\d{3}$/,
  },
  maskInvalidMessage: 'Código postal deve ter o formato correto',
}

const MemberNewForm = ({ data }: MemberNewFormProps) => {
  const [formData, setFormData] = useState({ ...data })

  useEffect(() => {
    setFormData({ ...data })
  }, [data])

  return (
    <Form formData={formData} showValidationSummary={true}>
      {/* identificação */}
      <Item itemType="group" caption="Identificação" colCount={2} colSpan={2}>
        <Item
          isRequired={true}
          dataField="member.fullName"
          label={{ text: 'Nome Completo', location: 'top' }}
        >
          <RequiredRule message="Nome is required" />
          <PatternRule
            message="Do not use digits in the Name"
            pattern={/^[^0-9]+$/}
          />
        </Item>
        <Item
          isRequired={true}
          dataField="member.gender_id"
          label={{ text: 'Genero', location: 'top' }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getGengerList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          isRequired={true}
          dataField="member.dateOfBirth"
          editorType="dxDateBox"
          editorOptions={{ ...datepickOptions, max: new Date() }}
          label={{ text: 'Data Nascimento', location: 'top' }}
        />
        <Item
          isRequired={true}
          dataField="member.nationality_id"
          label={{ text: 'Nacionalidade', location: 'top' }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getNacionalitiesList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          isRequired={true}
          dataField="member.placeOfBirth"
          label={{ text: 'Naturalidade', location: 'top' }}
        ></Item>
        <Item
          dataField="member.email"
          label={{ text: 'Email', location: 'top' }}
        >
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
        </Item>
        <Item
          isRequired={true}
          dataField="member.contact"
          label={{ text: 'Nº Telemóvel', location: 'top' }}
          editorOptions={phoneNumberOptions}
        ></Item>
      </Item>
      {/* dados morada */}
      <Item itemType="group" caption="Morada" colCount={2} colSpan={2}>
        <Item
          isRequired={true}
          dataField="memberAddress.address"
          label={{ text: 'Morada', location: 'top' }}
        />
        <Item
          isRequired={true}
          dataField="memberAddress.city"
          label={{ text: 'Cidade', location: 'top' }}
        />
        <Item
          isRequired={true}
          dataField="memberAddress.county"
          label={{ text: 'Concelho', location: 'top' }}
        />
        <Item
          isRequired={true}
          dataField="memberAddress.parish"
          label={{ text: 'Freguesia', location: 'top' }}
        />
        <Item
          isRequired={true}
          dataField="memberAddress.postalCode"
          label={{ text: 'Cod. Postal', location: 'top' }}
          editorOptions={postalCodeOptions}
        ></Item>
      </Item>
      {/* identificação fiscal */}
      <Item
        itemType="group"
        caption="Documento de Identificação"
        colCount={2}
        colSpan={2}
      >
        <Item
          isRequired={true}
          dataField="memberIdentificationDocument.identificationDocument_id"
          label={{
            text: 'Documento de identificação',
            location: 'top',
          }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getIdentificationDocumentList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          isRequired={true}
          dataField="memberIdentificationDocument.identificationNumber"
          label={{ text: 'Nº Identificação', location: 'top' }}
        />
        <Item
          isRequired={true}
          dataField="memberIdentificationDocument.expireDate"
          label={{ text: 'Data de Validade', location: 'top' }}
          editorType="dxDateBox"
          editorOptions={{ ...datepickOptions, min: new Date() }}
        />
        <Item
          isRequired={true}
          dataField="memberIdentificationDocument.taxIdentificationNumber"
          label={{ text: 'Nº Identificação Fiscal', location: 'top' }}
          editorType="dxNumberBox"
          editorOptions={{
            value: null,
          }}
        >
          <StringLengthRule
            message="NIF deve conter 9 digitos"
            min={9}
            max={9}
          />
        </Item>
      </Item>
      {/* responsavel */}
      <Item itemType="group" caption="Responsável" colCount={2} colSpan={2}>
        <Item
          dataField="memberGuardian.fullName"
          label={{ text: 'Nome Responsável', location: 'top' }}
        />
        <Item
          dataField="memberGuardian.contact"
          label={{ text: 'Nº Telemóvel', location: 'top' }}
          editorOptions={phoneNumberOptions}
        />
        <Item
          dataField="memberGuardian.relationshipDegree_id"
          label={{ text: 'Grau de Parentesco', location: 'top' }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getRelationshipDegreeListList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          dataField="memberGuardian.address"
          label={{ text: 'Morada', location: 'top' }}
        />
        <Item
          dataField="memberGuardian.city"
          label={{ text: 'Cidade', location: 'top' }}
        />
        <Item
          dataField="memberGuardian.county"
          label={{ text: 'Concelho', location: 'top' }}
        />
        <Item
          dataField="memberGuardian.parish"
          label={{ text: 'Freguesia', location: 'top' }}
        />
        <Item
          dataField="memberGuardian.postalCode"
          label={{ text: 'Cod. Postal', location: 'top' }}
          editorOptions={postalCodeOptions}
        />
      </Item>
      {/* Modalidade & Frequência */}
      <Item
        itemType="group"
        caption="Modalidade, Frequência e Pagamentos"
        colCount={2}
        colSpan={2}
      >
        <Item
          isRequired={true}
          dataField="member.modality_id"
          label={{
            text: 'Modalidades',
            location: 'top',
          }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getModalitiesList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          isRequired={true}
          dataField="member.frequency_id"
          label={{
            text: 'Frequência',
            location: 'top',
          }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getFrequenciesList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          isRequired={true}
          dataField="member.memberType_id"
          label={{
            text: 'Tipo de inscrição',
            location: 'top',
          }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getMemeberTypesList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
        <Item
          isRequired={true}
          dataField="member.paymentFrequency_id"
          label={{
            text: 'Periodicidade de pagamentos',
            location: 'top',
          }}
          editorType="dxSelectBox"
          editorOptions={{
            dataSource: serviceData.getPaymentFrequencyList(),
            key: 'id',
            displayExpr: 'text',
            valueExpr: 'id',
          }}
        />
      </Item>
      {/* Termos e condições */}
      <Item
        itemType="group"
        caption="Termos e Condições"
        colCount={2}
        colSpan={2}
      >
        <Item
          isRequired={true}
          dataField="member.termsAndConditions"
          label={{
            text: 'Eu li e concorco com os Termos e Condições assim como o Regulamento interno',
            location: 'left',
          }}
          editorType="dxCheckBox"
          editorOptions={{ value: false }}
          colCount={2}
          colSpan={2}
        />
        <Item
          isRequired={true}
          dataField="member.healthDeclaration"
          label={{
            text: 'Declaro dispor da robustez física e que não tenho nenhum problema de saúde que impeça a pratica de atividade física',
            location: 'left',
          }}
          editorType="dxCheckBox"
          editorOptions={{ value: false }}
          colCount={2}
          colSpan={2}
        />
      </Item>
    </Form>
  )
}

export default MemberNewForm
