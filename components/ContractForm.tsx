import { Button, Form, Input, Space } from 'antd'

interface ContractFormProps {
	checkContract: (contractId: string) => void
}

const ContractForm = ({ checkContract }: ContractFormProps) => {
	const onFinish = (values: any) => {
		console.log('Received values of form:', values)
		checkContract(values.contractId)
	}

	return (
		<Form
			name="contract_input_form"
			onFinish={onFinish}
			labelCol={{
				span: 7,
			}}
			className="md:w-[60%]"
		>
			<Space.Compact block className="flex items-end space-x-3">
				<Form.Item
					name="contractId"
					className="flex-1"
					label="NFT contract"
					rules={[{ required: true, message: 'Please input contract address' }]}
				>
					<Input placeholder="Contract Address" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="bg-[#1677ff]">
						Check
					</Button>
				</Form.Item>
			</Space.Compact>
		</Form>
	)
}

export default ContractForm
