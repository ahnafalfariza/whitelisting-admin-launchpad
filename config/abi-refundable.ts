const abi_refundable = {
	source: {
		hash: '0xcb6fc02cfe0cb906982661e974a3b479aef5aeca6b9c67b59696b5cc0098142a',
		language: 'ink! 4.1.0',
		compiler: 'rustc 1.69.0-nightly',
		build_info: {
			build_mode: 'Release',
			cargo_contract_version: '2.1.0',
			rust_toolchain: 'nightly-x86_64-unknown-linux-gnu',
			wasm_opt_settings: {
				keep_debug_symbols: false,
				optimization_passes: 'Z',
			},
		},
	},
	contract: {
		name: 'paras_refundable',
		version: '0.3.0',
		authors: ['Paras <dev@paras.id>'],
	},
	spec: {
		constructors: [
			{
				args: [
					{
						label: 'name',
						type: {
							displayName: ['String'],
							type: 8,
						},
					},
					{
						label: 'symbol',
						type: {
							displayName: ['String'],
							type: 8,
						},
					},
					{
						label: 'base_uri',
						type: {
							displayName: ['String'],
							type: 8,
						},
					},
					{
						label: 'max_supply',
						type: {
							displayName: ['u64'],
							type: 6,
						},
					},
					{
						label: 'prepresale_price_per_mint',
						type: {
							displayName: ['Balance'],
							type: 7,
						},
					},
					{
						label: 'presale_price_per_mint',
						type: {
							displayName: ['Balance'],
							type: 7,
						},
					},
					{
						label: 'price_per_mint',
						type: {
							displayName: ['Balance'],
							type: 7,
						},
					},
					{
						label: 'prepresale_start_at',
						type: {
							displayName: ['u64'],
							type: 6,
						},
					},
					{
						label: 'presale_start_at',
						type: {
							displayName: ['u64'],
							type: 6,
						},
					},
					{
						label: 'public_sale_start_at',
						type: {
							displayName: ['u64'],
							type: 6,
						},
					},
					{
						label: 'public_sale_end_at',
						type: {
							displayName: ['u64'],
							type: 6,
						},
					},
					{
						label: 'refund_periods',
						type: {
							displayName: ['Vec'],
							type: 9,
						},
					},
					{
						label: 'refund_shares',
						type: {
							displayName: ['Vec'],
							type: 10,
						},
					},
					{
						label: 'refund_address',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
					{
						label: 'launchpad_fee',
						type: {
							displayName: ['Percentage'],
							type: 7,
						},
					},
					{
						label: 'project_treasury',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
					{
						label: 'launchpad_treasury',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
				],
				docs: [],
				label: 'new',
				payable: false,
				returnType: {
					displayName: ['ink_primitives', 'ConstructorResult'],
					type: 11,
				},
				selector: '0x9bae9d5e',
			},
		],
		docs: [],
		events: [
			{
				args: [
					{
						docs: [],
						indexed: true,
						label: 'from',
						type: {
							displayName: ['Option'],
							type: 20,
						},
					},
					{
						docs: [],
						indexed: true,
						label: 'to',
						type: {
							displayName: ['Option'],
							type: 20,
						},
					},
					{
						docs: [],
						indexed: true,
						label: 'id',
						type: {
							displayName: ['Id'],
							type: 18,
						},
					},
				],
				docs: [' Event emitted when a token transfer occurs.'],
				label: 'Transfer',
			},
			{
				args: [
					{
						docs: [],
						indexed: true,
						label: 'from',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
					{
						docs: [],
						indexed: true,
						label: 'to',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
					{
						docs: [],
						indexed: true,
						label: 'id',
						type: {
							displayName: ['Option'],
							type: 22,
						},
					},
					{
						docs: [],
						indexed: false,
						label: 'approved',
						type: {
							displayName: ['bool'],
							type: 23,
						},
					},
				],
				docs: [' Event emitted when a token approve occurs.'],
				label: 'Approval',
			},
			{
				args: [
					{
						docs: [],
						indexed: true,
						label: 'from',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
					{
						docs: [],
						indexed: true,
						label: 'to',
						type: {
							displayName: ['AccountId'],
							type: 0,
						},
					},
					{
						docs: [],
						indexed: true,
						label: 'id',
						type: {
							displayName: ['Option'],
							type: 22,
						},
					},
					{
						docs: [],
						indexed: false,
						label: 'price',
						type: {
							displayName: ['Balance'],
							type: 7,
						},
					},
					{
						docs: [],
						indexed: false,
						label: 'refunded',
						type: {
							displayName: ['Balance'],
							type: 7,
						},
					},
				],
				docs: [],
				label: 'Refund',
			},
		],
		lang_error: {
			displayName: ['ink', 'LangError'],
			type: 12,
		},
		messages: [
			{
				args: [
					{
						label: 'code_hash',
						type: {
							displayName: [],
							type: 1,
						},
					},
				],
				docs: [],
				label: 'set_code',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x694fb50f',
			},
			{
				args: [],
				docs: [' Returns current NFT total supply.'],
				label: 'PSP34::total_supply',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x628413fe',
			},
			{
				args: [],
				docs: [
					' Returns the collection `Id` of the NFT token.',
					'',
					' This can represents the relationship between tokens/contracts/pallets.',
				],
				label: 'PSP34::collection_id',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 17,
				},
				selector: '0xffa27a5f',
			},
			{
				args: [
					{
						label: 'id',
						type: {
							displayName: ['psp34_external', 'OwnerOfInput1'],
							type: 18,
						},
					},
				],
				docs: [' Returns the owner of the token if any.'],
				label: 'PSP34::owner_of',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 19,
				},
				selector: '0x1168624d',
			},
			{
				args: [
					{
						label: 'owner',
						type: {
							displayName: ['psp34_external', 'BalanceOfInput1'],
							type: 0,
						},
					},
				],
				docs: [
					' Returns the balance of the owner.',
					'',
					' This represents the amount of unique tokens the owner has.',
				],
				label: 'PSP34::balance_of',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 21,
				},
				selector: '0xcde7e55f',
			},
			{
				args: [
					{
						label: 'operator',
						type: {
							displayName: ['psp34_external', 'ApproveInput1'],
							type: 0,
						},
					},
					{
						label: 'id',
						type: {
							displayName: ['psp34_external', 'ApproveInput2'],
							type: 22,
						},
					},
					{
						label: 'approved',
						type: {
							displayName: ['psp34_external', 'ApproveInput3'],
							type: 23,
						},
					},
				],
				docs: [
					" Approves `operator` to withdraw the `id` token from the caller's account.",
					' If `id` is `None` approves or disapproves the operator for all tokens of the caller.',
					'',
					' On success a `Approval` event is emitted.',
					'',
					' # Errors',
					'',
					' Returns `SelfApprove` error if it is self approve.',
					'',
					' Returns `NotApproved` error if caller is not owner of `id`.',
				],
				label: 'PSP34::approve',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x1932a8b0',
			},
			{
				args: [
					{
						label: 'owner',
						type: {
							displayName: ['psp34_external', 'AllowanceInput1'],
							type: 0,
						},
					},
					{
						label: 'operator',
						type: {
							displayName: ['psp34_external', 'AllowanceInput2'],
							type: 0,
						},
					},
					{
						label: 'id',
						type: {
							displayName: ['psp34_external', 'AllowanceInput3'],
							type: 22,
						},
					},
				],
				docs: [
					' Returns `true` if the operator is approved by the owner to withdraw `id` token.',
					" If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens.",
				],
				label: 'PSP34::allowance',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 24,
				},
				selector: '0x4790f55a',
			},
			{
				args: [
					{
						label: 'to',
						type: {
							displayName: ['psp34_external', 'TransferInput1'],
							type: 0,
						},
					},
					{
						label: 'id',
						type: {
							displayName: ['psp34_external', 'TransferInput2'],
							type: 18,
						},
					},
					{
						label: 'data',
						type: {
							displayName: ['psp34_external', 'TransferInput3'],
							type: 8,
						},
					},
				],
				docs: [
					' Transfer approved or owned token from caller.',
					'',
					' On success a `Transfer` event is emitted.',
					'',
					' # Errors',
					'',
					' Returns `TokenNotExists` error if `id` does not exist.',
					'',
					" Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
					'',
					" Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer.",
				],
				label: 'PSP34::transfer',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x3128d61b',
			},
			{
				args: [
					{
						label: 'index',
						type: {
							displayName: ['psp34enumerable_external', 'TokenByIndexInput1'],
							type: 7,
						},
					},
				],
				docs: [
					' Returns a token `Id` at a given `index` of all the tokens stored by the contract.',
					' Use along with `total_supply` to enumerate all tokens.',
					'',
					' The start index is zero.',
				],
				label: 'PSP34Enumerable::token_by_index',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 25,
				},
				selector: '0xcd0340d0',
			},
			{
				args: [
					{
						label: 'owner',
						type: {
							displayName: [
								'psp34enumerable_external',
								'OwnersTokenByIndexInput1',
							],
							type: 0,
						},
					},
					{
						label: 'index',
						type: {
							displayName: [
								'psp34enumerable_external',
								'OwnersTokenByIndexInput2',
							],
							type: 7,
						},
					},
				],
				docs: [
					' Returns a token `Id` owned by `owner` at a given `index` of its token list.',
					" Use along with `balance_of` to enumerate all of ``owner``'s tokens.",
					'',
					' The start index is zero.',
				],
				label: 'PSP34Enumerable::owners_token_by_index',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 25,
				},
				selector: '0x3bcfb511',
			},
			{
				args: [
					{
						label: 'id',
						type: {
							displayName: ['psp34metadata_external', 'GetAttributeInput1'],
							type: 18,
						},
					},
					{
						label: 'key',
						type: {
							displayName: ['psp34metadata_external', 'GetAttributeInput2'],
							type: 8,
						},
					},
				],
				docs: [
					' Returns the attribute of `id` for the given `key`.',
					'',
					' If `id` is a collection id of the token, it returns attributes for collection.',
				],
				label: 'PSP34Metadata::get_attribute',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 27,
				},
				selector: '0xf19d48d1',
			},
			{
				args: [
					{
						label: 'new_owner',
						type: {
							displayName: ['ownable_external', 'TransferOwnershipInput1'],
							type: 0,
						},
					},
				],
				docs: [
					' Transfers ownership of the contract to a `new_owner`.',
					' Can only be called by the current owner.',
					'',
					' On success a `OwnershipTransferred` event is emitted.',
					'',
					' # Errors',
					'',
					' Panics with `CallerIsNotOwner` error if caller is not owner.',
					'',
					" Panics with `NewOwnerIsZero` error if new owner's address is zero.",
				],
				label: 'Ownable::transfer_ownership',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 29,
				},
				selector: '0x11f43efd',
			},
			{
				args: [],
				docs: [
					' Leaves the contract without owner. It will not be possible to call',
					" owner's functions anymore. Can only be called by the current owner.",
					'',
					' NOTE: Renouncing ownership will leave the contract without an owner,',
					' thereby removing any functionality that is only available to the owner.',
					'',
					' On success a `OwnershipTransferred` event is emitted.',
					'',
					' # Errors',
					'',
					' Panics with `CallerIsNotOwner` error if caller is not owner',
				],
				label: 'Ownable::renounce_ownership',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 29,
				},
				selector: '0x5e228753',
			},
			{
				args: [],
				docs: [' Returns the address of the current owner.'],
				label: 'Ownable::owner',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 32,
				},
				selector: '0x4fa43c8c',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_refund_address',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 32,
				},
				selector: '0xc1d0c169',
			},
			{
				args: [
					{
						label: 'account_id',
						type: {
							displayName: [
								'launchpad_external',
								'GetAccountPrepresaleMintingAmountInput1',
							],
							type: 0,
						},
					},
				],
				docs: [],
				label: 'Launchpad::get_account_prepresale_minting_amount',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0x9f1bfa9b',
			},
			{
				args: [],
				docs: [' Get token price'],
				label: 'Launchpad::price',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0xbfb4e0e0',
			},
			{
				args: [
					{
						label: 'max_amount',
						type: {
							displayName: ['launchpad_external', 'SetMaxMintAmountInput1'],
							type: 6,
						},
					},
				],
				docs: [' Set max number of tokens which could be minted per call'],
				label: 'Launchpad::set_max_mint_amount',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x7bcbcd9b',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_refund_periods',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 34,
				},
				selector: '0x232757e6',
			},
			{
				args: [],
				docs: [' Withdraw funds to contract owner'],
				label: 'Launchpad::withdraw_launchpad',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0xce9a9645',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_project_treasury_address',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 32,
				},
				selector: '0x445e071f',
			},
			{
				args: [
					{
						label: 'account_id',
						type: {
							displayName: ['launchpad_external', 'AddAccountToPresaleInput1'],
							type: 0,
						},
					},
					{
						label: 'mint_amount',
						type: {
							displayName: ['launchpad_external', 'AddAccountToPresaleInput2'],
							type: 6,
						},
					},
				],
				docs: [],
				label: 'Launchpad::add_account_to_presale',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0xcd63a694',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_minting_status',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 35,
				},
				selector: '0x68375362',
			},
			{
				args: [],
				docs: [' Get max supply of tokens'],
				label: 'Launchpad::max_supply',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0xcfff8196',
			},
			{
				args: [
					{
						label: 'token_id',
						type: {
							displayName: ['launchpad_external', 'RefundInput1'],
							type: 6,
						},
					},
				],
				docs: [],
				label: 'Launchpad::refund',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 36,
				},
				selector: '0x91ce70d0',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_prepresale_start_at',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0xdebdc3ea',
			},
			{
				args: [],
				docs: [' Get max number of tokens which could be minted per call'],
				label: 'Launchpad::get_max_mint_amount',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0xf6196c55',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_launchpad_fee',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x20363824',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_available_to_withdraw_launchpad',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x404d2f60',
			},
			{
				args: [
					{
						label: 'token_id',
						type: {
							displayName: ['launchpad_external', 'GetRefundAmountInput1'],
							type: 6,
						},
					},
				],
				docs: [],
				label: 'Launchpad::get_refund_amount',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x2fc61cfa',
			},
			{
				args: [
					{
						label: 'account_id',
						type: {
							displayName: [
								'launchpad_external',
								'GetAccountPresaleMintingAmountInput1',
							],
							type: 0,
						},
					},
				],
				docs: [],
				label: 'Launchpad::get_account_presale_minting_amount',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0x2d1251f8',
			},
			{
				args: [],
				docs: [' Mint next available token for the caller'],
				label: 'Launchpad::mint_next',
				mutates: true,
				payable: true,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0xf02a61f2',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_available_to_withdraw_project',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x6eb500e3',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_refund_shares',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 38,
				},
				selector: '0xe605cdf8',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_public_sale_start_at',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0x9785e5ad',
			},
			{
				args: [
					{
						label: 'account_id_mint_amounts',
						type: {
							displayName: [
								'launchpad_external',
								'AddAccountToPrepresaleBatchInput1',
							],
							type: 39,
						},
					},
				],
				docs: [],
				label: 'Launchpad::add_account_to_prepresale_batch',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x86e0adc1',
			},
			{
				args: [],
				docs: [' Withdraw funds to launchpad project'],
				label: 'Launchpad::withdraw_project',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x8d797984',
			},
			{
				args: [
					{
						label: 'account_id',
						type: {
							displayName: [
								'launchpad_external',
								'AddAccountToPrepresaleInput1',
							],
							type: 0,
						},
					},
					{
						label: 'mint_amount',
						type: {
							displayName: [
								'launchpad_external',
								'AddAccountToPrepresaleInput2',
							],
							type: 6,
						},
					},
				],
				docs: [],
				label: 'Launchpad::add_account_to_prepresale',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x7253a5b3',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_presale_start_at',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0x573d72cf',
			},
			{
				args: [
					{
						label: 'refund_periods',
						type: {
							displayName: ['launchpad_external', 'SetRefundPeriodsInput1'],
							type: 9,
						},
					},
				],
				docs: [],
				label: 'Launchpad::set_refund_periods',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0xe3b959ae',
			},
			{
				args: [
					{
						label: 'minting_status_index',
						type: {
							displayName: ['launchpad_external', 'SetMintingStatusInput1'],
							type: 41,
						},
					},
				],
				docs: [],
				label: 'Launchpad::set_minting_status',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x7599a8f7',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_public_sale_end_at',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 33,
				},
				selector: '0xf551d63f',
			},
			{
				args: [
					{
						label: 'account_id_mint_amounts',
						type: {
							displayName: [
								'launchpad_external',
								'AddAccountToPresaleBatchInput1',
							],
							type: 39,
						},
					},
				],
				docs: [],
				label: 'Launchpad::add_account_to_presale_batch',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x9a9565fb',
			},
			{
				args: [],
				docs: [' Get token price presale'],
				label: 'Launchpad::presale_price',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x24399466',
			},
			{
				args: [],
				docs: [],
				label: 'Launchpad::get_launchpad_treasury_address',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 32,
				},
				selector: '0x9c1fefc1',
			},
			{
				args: [
					{
						label: 'to',
						type: {
							displayName: ['launchpad_external', 'MintInput1'],
							type: 0,
						},
					},
					{
						label: 'mint_amount',
						type: {
							displayName: ['launchpad_external', 'MintInput2'],
							type: 6,
						},
					},
				],
				docs: [' Mint one or more tokens'],
				label: 'Launchpad::mint',
				mutates: true,
				payable: true,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x339a1f14',
			},
			{
				args: [],
				docs: [' Get token price presale'],
				label: 'Launchpad::prepresale_price',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 16,
				},
				selector: '0x22195d3a',
			},
			{
				args: [
					{
						label: 'token_id',
						type: {
							displayName: [
								'psp34traits_external',
								'SetMultipleAttributesInput1',
							],
							type: 18,
						},
					},
					{
						label: 'metadata',
						type: {
							displayName: [
								'psp34traits_external',
								'SetMultipleAttributesInput2',
							],
							type: 42,
						},
					},
				],
				docs: [],
				label: 'Psp34Traits::set_multiple_attributes',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x5bf8416b',
			},
			{
				args: [],
				docs: [
					' This function return how many unique attributes in the contract',
				],
				label: 'Psp34Traits::get_attribute_count',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 21,
				},
				selector: '0x61c50d69',
			},
			{
				args: [
					{
						label: 'uri',
						type: {
							displayName: ['psp34traits_external', 'SetBaseUriInput1'],
							type: 44,
						},
					},
				],
				docs: [' Set new value for the baseUri'],
				label: 'Psp34Traits::set_base_uri',
				mutates: true,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 13,
				},
				selector: '0x4de6850b',
			},
			{
				args: [
					{
						label: 'index',
						type: {
							displayName: ['psp34traits_external', 'GetAttributeNameInput1'],
							type: 5,
						},
					},
				],
				docs: [
					' This function return the attribute name using attribute index. Beacause attributes of an NFT can be set to anything by Contract Owner, AztZero uses this function to get all attributes of an NFT',
				],
				label: 'Psp34Traits::get_attribute_name',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 45,
				},
				selector: '0xfcfe34de',
			},
			{
				args: [
					{
						label: 'token_id',
						type: {
							displayName: ['psp34traits_external', 'TokenUriInput1'],
							type: 6,
						},
					},
				],
				docs: [' Get URI from token ID'],
				label: 'Psp34Traits::token_uri',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 45,
				},
				selector: '0x249dfd4f',
			},
			{
				args: [
					{
						label: 'token_id',
						type: {
							displayName: ['psp34traits_external', 'GetAttributesInput1'],
							type: 18,
						},
					},
					{
						label: 'attributes',
						type: {
							displayName: ['psp34traits_external', 'GetAttributesInput2'],
							type: 46,
						},
					},
				],
				docs: [' This function returns all available attributes of each NFT'],
				label: 'Psp34Traits::get_attributes',
				mutates: false,
				payable: false,
				returnType: {
					displayName: ['ink', 'MessageResult'],
					type: 47,
				},
				selector: '0x18209102',
			},
		],
	},
	storage: {
		root: {
			layout: {
				struct: {
					fields: [
						{
							layout: {
								struct: {
									fields: [
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0x1cc80634',
															ty: 0,
														},
													},
													root_key: '0x1cc80634',
												},
											},
											name: 'token_owner',
										},
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0x7e3fae6b',
															ty: 3,
														},
													},
													root_key: '0x7e3fae6b',
												},
											},
											name: 'operator_approvals',
										},
										{
											layout: {
												struct: {
													fields: [
														{
															layout: {
																root: {
																	layout: {
																		enum: {
																			dispatchKey: '0xca32a240',
																			name: 'Id',
																			variants: {
																				'0': {
																					fields: [
																						{
																							layout: {
																								leaf: {
																									key: '0xca32a240',
																									ty: 2,
																								},
																							},
																							name: '0',
																						},
																					],
																					name: 'U8',
																				},
																				'1': {
																					fields: [
																						{
																							layout: {
																								leaf: {
																									key: '0xca32a240',
																									ty: 4,
																								},
																							},
																							name: '0',
																						},
																					],
																					name: 'U16',
																				},
																				'2': {
																					fields: [
																						{
																							layout: {
																								leaf: {
																									key: '0xca32a240',
																									ty: 5,
																								},
																							},
																							name: '0',
																						},
																					],
																					name: 'U32',
																				},
																				'3': {
																					fields: [
																						{
																							layout: {
																								leaf: {
																									key: '0xca32a240',
																									ty: 6,
																								},
																							},
																							name: '0',
																						},
																					],
																					name: 'U64',
																				},
																				'4': {
																					fields: [
																						{
																							layout: {
																								leaf: {
																									key: '0xca32a240',
																									ty: 7,
																								},
																							},
																							name: '0',
																						},
																					],
																					name: 'U128',
																				},
																				'5': {
																					fields: [
																						{
																							layout: {
																								leaf: {
																									key: '0xca32a240',
																									ty: 8,
																								},
																							},
																							name: '0',
																						},
																					],
																					name: 'Bytes',
																				},
																			},
																		},
																	},
																	root_key: '0xca32a240',
																},
															},
															name: 'enumerable',
														},
														{
															layout: {
																enum: {
																	dispatchKey: '0x00000000',
																	name: 'Option',
																	variants: {
																		'0': {
																			fields: [],
																			name: 'None',
																		},
																		'1': {
																			fields: [
																				{
																					layout: {
																						leaf: {
																							key: '0x00000000',
																							ty: 3,
																						},
																					},
																					name: '0',
																				},
																			],
																			name: 'Some',
																		},
																	},
																},
															},
															name: '_reserved',
														},
													],
													name: 'Balances',
												},
											},
											name: 'balances',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 3,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: '_reserved',
										},
									],
									name: 'Data',
								},
							},
							name: 'psp34',
						},
						{
							layout: {
								struct: {
									fields: [
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 0,
												},
											},
											name: 'owner',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 3,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: '_reserved',
										},
									],
									name: 'Data',
								},
							},
							name: 'ownable',
						},
						{
							layout: {
								struct: {
									fields: [
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0x9b2d2382',
															ty: 8,
														},
													},
													root_key: '0x9b2d2382',
												},
											},
											name: 'attributes',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 3,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: '_reserved',
										},
									],
									name: 'Data',
								},
							},
							name: 'metadata',
						},
						{
							layout: {
								struct: {
									fields: [
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 5,
												},
											},
											name: 'collection_id',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'max_supply',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'price_per_mint',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'max_amount',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 9,
												},
											},
											name: 'token_set',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'pseudo_random_salt',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 2,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: 'forced_minting_status',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'public_sale_start_at',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'public_sale_end_at',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'prepresale_start_at',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'prepresale_price_per_mint',
										},
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0x1d90320a',
															ty: 6,
														},
													},
													root_key: '0x1d90320a',
												},
											},
											name: 'prepresale_whitelisted',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 6,
												},
											},
											name: 'presale_start_at',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'presale_price_per_mint',
										},
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0x79a7901b',
															ty: 6,
														},
													},
													root_key: '0x79a7901b',
												},
											},
											name: 'presale_whitelisted',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 9,
												},
											},
											name: 'refund_periods',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 10,
												},
											},
											name: 'refund_shares',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 0,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: 'refund_address',
										},
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0xc5f56d89',
															ty: 2,
														},
													},
													root_key: '0xc5f56d89',
												},
											},
											name: 'minting_type_for_token',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'total_sales',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'total_refund',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'withdrawn_sales_project',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'withdrawn_sales_launchpad',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 7,
												},
											},
											name: 'launchpad_fee',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 0,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: 'project_treasury',
										},
										{
											layout: {
												enum: {
													dispatchKey: '0x00000000',
													name: 'Option',
													variants: {
														'0': {
															fields: [],
															name: 'None',
														},
														'1': {
															fields: [
																{
																	layout: {
																		leaf: {
																			key: '0x00000000',
																			ty: 0,
																		},
																	},
																	name: '0',
																},
															],
															name: 'Some',
														},
													},
												},
											},
											name: 'launchpad_treasury',
										},
										{
											layout: {
												leaf: {
													key: '0x00000000',
													ty: 5,
												},
											},
											name: 'attribute_count',
										},
										{
											layout: {
												root: {
													layout: {
														leaf: {
															key: '0x8bf87035',
															ty: 8,
														},
													},
													root_key: '0x8bf87035',
												},
											},
											name: 'attribute_names',
										},
									],
									name: 'Data',
								},
							},
							name: 'launchpad',
						},
					],
					name: 'ParasRefundableContract',
				},
			},
			root_key: '0x00000000',
		},
	},
	types: [
		{
			id: 0,
			type: {
				def: {
					composite: {
						fields: [
							{
								type: 1,
								typeName: '[u8; 32]',
							},
						],
					},
				},
				path: ['ink_primitives', 'types', 'AccountId'],
			},
		},
		{
			id: 1,
			type: {
				def: {
					array: {
						len: 32,
						type: 2,
					},
				},
			},
		},
		{
			id: 2,
			type: {
				def: {
					primitive: 'u8',
				},
			},
		},
		{
			id: 3,
			type: {
				def: {
					tuple: [],
				},
			},
		},
		{
			id: 4,
			type: {
				def: {
					primitive: 'u16',
				},
			},
		},
		{
			id: 5,
			type: {
				def: {
					primitive: 'u32',
				},
			},
		},
		{
			id: 6,
			type: {
				def: {
					primitive: 'u64',
				},
			},
		},
		{
			id: 7,
			type: {
				def: {
					primitive: 'u128',
				},
			},
		},
		{
			id: 8,
			type: {
				def: {
					sequence: {
						type: 2,
					},
				},
			},
		},
		{
			id: 9,
			type: {
				def: {
					sequence: {
						type: 6,
					},
				},
			},
		},
		{
			id: 10,
			type: {
				def: {
					sequence: {
						type: 7,
					},
				},
			},
		},
		{
			id: 11,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 3,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 3,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 12,
			type: {
				def: {
					variant: {
						variants: [
							{
								index: 1,
								name: 'CouldNotReadInput',
							},
						],
					},
				},
				path: ['ink_primitives', 'LangError'],
			},
		},
		{
			id: 13,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 14,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 14,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 14,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 3,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 15,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 3,
					},
					{
						name: 'E',
						type: 15,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 15,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 8,
										typeName: 'String',
									},
								],
								index: 0,
								name: 'Custom',
							},
							{
								index: 1,
								name: 'SelfApprove',
							},
							{
								index: 2,
								name: 'NotApproved',
							},
							{
								index: 3,
								name: 'TokenExists',
							},
							{
								index: 4,
								name: 'TokenNotExists',
							},
							{
								fields: [
									{
										type: 8,
										typeName: 'String',
									},
								],
								index: 5,
								name: 'SafeTransferCheckFailed',
							},
						],
					},
				},
				path: [
					'openbrush_contracts',
					'traits',
					'errors',
					'psp34',
					'PSP34Error',
				],
			},
		},
		{
			id: 16,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 7,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 7,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 17,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 18,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 18,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 18,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 2,
										typeName: 'u8',
									},
								],
								index: 0,
								name: 'U8',
							},
							{
								fields: [
									{
										type: 4,
										typeName: 'u16',
									},
								],
								index: 1,
								name: 'U16',
							},
							{
								fields: [
									{
										type: 5,
										typeName: 'u32',
									},
								],
								index: 2,
								name: 'U32',
							},
							{
								fields: [
									{
										type: 6,
										typeName: 'u64',
									},
								],
								index: 3,
								name: 'U64',
							},
							{
								fields: [
									{
										type: 7,
										typeName: 'u128',
									},
								],
								index: 4,
								name: 'U128',
							},
							{
								fields: [
									{
										type: 8,
										typeName: 'Vec<u8>',
									},
								],
								index: 5,
								name: 'Bytes',
							},
						],
					},
				},
				path: ['openbrush_contracts', 'traits', 'types', 'Id'],
			},
		},
		{
			id: 19,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 20,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 20,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 20,
			type: {
				def: {
					variant: {
						variants: [
							{
								index: 0,
								name: 'None',
							},
							{
								fields: [
									{
										type: 0,
									},
								],
								index: 1,
								name: 'Some',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 0,
					},
				],
				path: ['Option'],
			},
		},
		{
			id: 21,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 5,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 5,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 22,
			type: {
				def: {
					variant: {
						variants: [
							{
								index: 0,
								name: 'None',
							},
							{
								fields: [
									{
										type: 18,
									},
								],
								index: 1,
								name: 'Some',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 18,
					},
				],
				path: ['Option'],
			},
		},
		{
			id: 23,
			type: {
				def: {
					primitive: 'bool',
				},
			},
		},
		{
			id: 24,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 23,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 23,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 25,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 26,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 26,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 26,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 18,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 15,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 18,
					},
					{
						name: 'E',
						type: 15,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 27,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 28,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 28,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 28,
			type: {
				def: {
					variant: {
						variants: [
							{
								index: 0,
								name: 'None',
							},
							{
								fields: [
									{
										type: 8,
									},
								],
								index: 1,
								name: 'Some',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 8,
					},
				],
				path: ['Option'],
			},
		},
		{
			id: 29,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 30,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 30,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 30,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 3,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 31,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 3,
					},
					{
						name: 'E',
						type: 31,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 31,
			type: {
				def: {
					variant: {
						variants: [
							{
								index: 0,
								name: 'CallerIsNotOwner',
							},
							{
								index: 1,
								name: 'NewOwnerIsZero',
							},
						],
					},
				},
				path: [
					'openbrush_contracts',
					'traits',
					'errors',
					'ownable',
					'OwnableError',
				],
			},
		},
		{
			id: 32,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 0,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 0,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 33,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 6,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 6,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 34,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 9,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 9,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 35,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 8,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 8,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 36,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 37,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 37,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 37,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 7,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 15,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 7,
					},
					{
						name: 'E',
						type: 15,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 38,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 10,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 10,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 39,
			type: {
				def: {
					sequence: {
						type: 40,
					},
				},
			},
		},
		{
			id: 40,
			type: {
				def: {
					tuple: [0, 6],
				},
			},
		},
		{
			id: 41,
			type: {
				def: {
					variant: {
						variants: [
							{
								index: 0,
								name: 'None',
							},
							{
								fields: [
									{
										type: 2,
									},
								],
								index: 1,
								name: 'Some',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 2,
					},
				],
				path: ['Option'],
			},
		},
		{
			id: 42,
			type: {
				def: {
					sequence: {
						type: 43,
					},
				},
			},
		},
		{
			id: 43,
			type: {
				def: {
					tuple: [44, 44],
				},
			},
		},
		{
			id: 44,
			type: {
				def: {
					primitive: 'str',
				},
			},
		},
		{
			id: 45,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 44,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 44,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
		{
			id: 46,
			type: {
				def: {
					sequence: {
						type: 44,
					},
				},
			},
		},
		{
			id: 47,
			type: {
				def: {
					variant: {
						variants: [
							{
								fields: [
									{
										type: 46,
									},
								],
								index: 0,
								name: 'Ok',
							},
							{
								fields: [
									{
										type: 12,
									},
								],
								index: 1,
								name: 'Err',
							},
						],
					},
				},
				params: [
					{
						name: 'T',
						type: 46,
					},
					{
						name: 'E',
						type: 12,
					},
				],
				path: ['Result'],
			},
		},
	],
	version: '4',
}
export default abi_refundable
