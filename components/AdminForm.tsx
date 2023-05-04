import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Space } from 'antd'

const formItemLayout = {
	labelCol: {
		xs: { span: 36 },
		sm: { span: 6 },
	},
	wrapperCol: {
		xs: { span: 36 },
		sm: { span: 28 },
	},
}

const formItemLayoutWithOutLabel = {
	wrapperCol: {
		xs: { span: 36, offset: 0 },
		sm: { span: 28, offset: 6 },
	},
}

const { Option } = Select

interface AdminFormProps {
	disabled: boolean
}

const AdminForm = ({ disabled }: AdminFormProps) => {
	const onFinish = (values: any) => {
		console.log('Received values of form:', values)
	}

	return (
		<Form
			{...formItemLayoutWithOutLabel}
			name="dynamic_form_item"
			onFinish={onFinish}
			className="md:w-[60%]"
			disabled={disabled}
		>
			<Form.Item
				{...formItemLayout}
				name="whitelist"
				label="Whitelist Type"
				className="mb-8"
				labelCol={{ span: 6 }}
				rules={[{ required: true, message: 'Please select whitelist type' }]}
			>
				<Select
					placeholder="Select a option and change input text above"
					allowClear
				>
					<Option value="Presale">Presale</Option>
					<Option value="Prepresale">Prepresale</Option>
				</Select>
			</Form.Item>
			<Form.List
				name="accounts"
				initialValue={[{ accountId: '', mintAmount: '' }]}
				rules={[
					{
						validator: async (_, names) => {
							if (!names || names.length < 1) {
								return Promise.reject(
									new Error('At least 1 account is required')
								)
							}
						},
					},
				]}
			>
				{(fields, { add, remove }, { errors }) => (
					<>
						{fields.map(({ key, name, ...restField }, index) => (
							<Form.Item
								{...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
								label={index === 0 ? 'AccountId' : ''}
								className="mb-2"
								required={true}
								key={key}
							>
								<Space.Compact block className="flex items-baseline space-x-3">
									<Form.Item
										{...restField}
										name={[name, 'accountId']}
										validateTrigger={['onChange', 'onBlur']}
										className="flex-1"
										rules={[
											{
												required: true,
												whitespace: true,
												message: 'Please input account id',
											},
										]}
									>
										<Input placeholder="Account Id" />
									</Form.Item>
									<Form.Item
										{...restField}
										name={[name, 'mintAmount']}
										validateTrigger={['onChange', 'onBlur']}
										rules={[
											{
												required: true,
												whitespace: true,
												message: 'Please input mint amount',
											},
										]}
									>
										<Input placeholder="Mint Amount" />
									</Form.Item>
									{fields.length > 1 && (
										<MinusCircleOutlined
											className="disabled:cursor-not-allowed disabled:opacity-50"
											onClick={() => remove(name)}
										/>
									)}
								</Space.Compact>
							</Form.Item>
						))}
						<Form.Item>
							<Button
								type="dashed"
								onClick={() => add()}
								style={{ width: '100%' }}
								icon={<PlusOutlined />}
							>
								Add field
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					</>
				)}
			</Form.List>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="bg-[#1677ff]">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AdminForm
