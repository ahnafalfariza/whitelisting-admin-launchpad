import { ApiPromise } from '@polkadot/api'
import { Button, Form, Input, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { PARAS_LAUNCHPAD_ADDRESS } from '../config/config'
import { web3Accounts } from '@polkadot/extension-dapp'
import {
	getDappAddressEnum,
	isValidAddressPolkadotAddress,
} from '@astar-network/astar-sdk-core'
import { formatEther } from 'ethers'

interface IStakerInfo {
	wallet_address?: string
	wallet_staked_amount?: string
	contract_address?: string
	contract_numof_stakers?: number
	contract_staked_total?: string
}

type InjectedAccount = Awaited<ReturnType<typeof web3Accounts>>

const StakerInfoForm = ({
	api,
	allAccount,
}: {
	api?: ApiPromise
	allAccount?: InjectedAccount
}) => {
	const [loading, setLoading] = useState(false)
	const [walletInput, setWalletInput] = useState<string>('')
	const [initStaker, setInitStaker] = useState<IStakerInfo | null>()
	const [backupStakers, setBackupStakers] = useState<IStakerInfo[]>([])
	const [stakers, setStakers] = useState<IStakerInfo[]>([])

	const { Search } = Input

	const columns: ColumnsType<IStakerInfo> = [
		{
			key: 'wallet_address',
			dataIndex: 'wallet_address',
			title: 'Wallet Address',
		},
		{
			key: 'wallet_staked_amount',
			dataIndex: 'wallet_staked_amount',
			title: 'Account Staked Amount',
		},
		{
			title: 'Action',
			key: 'action',
			align: 'center',
			render: (_, record: IStakerInfo, index) => (
				<>
					<Button
						type="primary"
						danger
						onClick={() =>
							setStakers((prev) => prev.filter((_, idx) => idx !== index))
						}
					>
						Delete
					</Button>
				</>
			),
		},
	]

	const fetchAccountStakingAmount = async (
		contractAddress: string,
		walletAddress: string
	) => {
		if (!api || !allAccount) return

		try {
			if (!isValidAddressPolkadotAddress(walletAddress)) return '0'
			const stakerInfo = await api.query.dappsStaking.generalStakerInfo<any>(
				walletAddress,
				getDappAddressEnum(contractAddress)
			)
			const balance =
				stakerInfo.stakes.length &&
				stakerInfo.stakes.slice(-1)[0].staked.toString()
			return String(balance)
		} catch (error) {
			return '0'
		}
	}

	const getStakerInfo = async (
		contract_address: string,
		wallet_address?: string,
		init = false
	) => {
		if (!api || !allAccount) return
		setLoading(true)
		try {
			const currentEra = await api.query.dappsStaking.currentEra()

			const parasEraStake = (await api.query.dappsStaking.contractEraStake(
				getDappAddressEnum(contract_address),
				currentEra
			)) as any

			const accountStakingAmount = {
				contractAddress: contract_address,
				accountStakingAmount: wallet_address
					? await fetchAccountStakingAmount(contract_address, wallet_address)
					: '0',
			}

			if (parasEraStake.isSome) {
				const unwrapParasEraStake = parasEraStake.unwrap()
				const formattedAccountStakingAmount = accountStakingAmount
					? formatEther(accountStakingAmount.accountStakingAmount as string)
					: '0'
				console.log({
					contractAddress: contract_address,
					numberOfStakers: unwrapParasEraStake.numberOfStakers.toNumber(),
					stakeTotal: parseFloat(
						formatEther(unwrapParasEraStake.total.toHuman().replaceAll(',', ''))
					).toLocaleString(),
					walletAddress: wallet_address,
					walletAccountAmount: formattedAccountStakingAmount,
				})

				init
					? setInitStaker({
							contract_address: contract_address,
							contract_numof_stakers:
								unwrapParasEraStake.numberOfStakers.toNumber(),
							contract_staked_total: parseFloat(
								formatEther(
									unwrapParasEraStake.total.toHuman().replaceAll(',', '')
								)
							).toLocaleString(),
					  })
					: (setStakers([
							...stakers,
							{
								wallet_address,
								wallet_staked_amount: formattedAccountStakingAmount,
							},
					  ]),
					  setBackupStakers([
							...stakers,
							{
								wallet_address,
								wallet_staked_amount: formattedAccountStakingAmount,
							},
					  ]))
				setLoading(false)
			} else {
				setStakers([])
				setLoading(false)
				return '0'
			}
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	const onSearchStaker = (input: string) => {
		if (!input) setStakers(backupStakers)
		setStakers((prev) =>
			prev.filter((data) => data.wallet_address?.includes(input))
		)
	}

	useEffect(() => {
		if (allAccount && api) {
			getStakerInfo(
				PARAS_LAUNCHPAD_ADDRESS as string,
				allAccount[0].address,
				true
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allAccount, api])

	return (
		<div className="flex flex-col space-y-5 mt-20 w-7/12">
			<p className="text-3xl font-bold">Stakers Info</p>
			<p className="text-base font-medium">
				Contract address:{' '}
				<span className="text-green-700">
					{initStaker?.contract_address} (Paras Dapp)
				</span>
			</p>
			<p className="text-base font-medium">
				Num of stakers:{' '}
				<span className="text-green-700">
					{initStaker?.contract_numof_stakers}
				</span>
			</p>
			<p className="text-base font-medium mb-5">
				Staked Total:{' '}
				<span className="text-green-700">
					{initStaker?.contract_staked_total}
				</span>
			</p>

			<Space.Compact block className="flex items-end space-x-3">
				<Form.Item
					name="walletAddress"
					className="flex-1"
					label="Wallet Address"
				>
					<Input
						placeholder="Add wallet address"
						onChange={(e) => setWalletInput(e.target.value)}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type="default"
						htmlType="submit"
						onClick={() =>
							getStakerInfo(PARAS_LAUNCHPAD_ADDRESS as string, walletInput)
						}
					>
						+ Add
					</Button>
				</Form.Item>
			</Space.Compact>

			<Search
				placeholder="Search wallet address"
				allowClear
				onSearch={onSearchStaker}
			/>

			<Table
				loading={loading}
				columns={columns}
				dataSource={stakers}
				scroll={{ x: 400 }}
			/>
		</div>
	)
}

export default StakerInfoForm
