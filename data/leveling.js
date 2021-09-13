import Locals from './local'
import Boss from './boss'
import Gems from './gems'
import Commons from './common'
import Books from './books'
import Weekly from './weekly'

const Leveling = {
	LOCALS: { ...Locals },
	BOSS: { ...Boss },
	GEMS: { ...Gems },
	COMMONS: { ...Commons },
	BOOKS: { ...Books },
	WEEKLY: { ...Weekly },
	defaults: {
		ASCEND_TEMPLATE: [
			{
				type: 'local',
				rarity: 1,
				obj: Locals,
				map: true,
			},
			{
				type: 'boss',
				rarity: 3,
				obj: Boss,
			},
			{
				type: 'gem',
				rarity: 3,
				obj: Gems,
				map: true,
			},
			{
				type: 'common',
				rarity: 3,
				obj: Commons,
				map: true,
			},
		],
		LEVEL_TEMPLATE: [
			{
				type: 'book',
				rarity: 4,
				obj: Books,
			},
			{
				type: 'weekly',
				rarity: 5,
				obj: Weekly,
			},
		],
	},
	levels: {
		ASCEND_LEVEL: [
			{
				phase: ['0', '1'],
				cost: 20000,
				material: [
					{
						type: 'gem',
						rarity: 2,
						qty: 1,
					},
					{
						type: 'boss',
						qty: false,
					},
					{
						type: 'local',
						rarity: 1,
						qty: 3,
					},
					{
						type: 'common',
						rarity: 1,
						qty: 3,
					},
				],
			},
			{
				phase: ['1', '2'],
				cost: 40000,
				material: [
					{
						type: 'gem',
						rarity: 3,
						qty: 3,
					},
					{
						type: 'boss',
						rarity: 4,
						qty: 2,
					},
					{
						type: 'local',
						rarity: 1,
						qty: 10,
					},
					{
						type: 'common',
						rarity: 1,
						qty: 15,
					},
				],
			},
			{
				phase: ['2', '3'],
				cost: 60000,
				material: [
					{
						type: 'gem',
						rarity: 3,
						qty: 6,
					},
					{
						type: 'boss',
						rarity: 4,
						qty: 4,
					},
					{
						type: 'local',
						rarity: 1,
						qty: 20,
					},
					{
						type: 'common',
						rarity: 2,
						qty: 12,
					},
				],
			},
			{
				phase: ['3', '4'],
				cost: 80000,
				material: [
					{
						type: 'gem',
						rarity: 4,
						qty: 3,
					},
					{
						type: 'boss',
						rarity: 4,
						qty: 8,
					},
					{
						type: 'local',
						rarity: 1,
						qty: 30,
					},
					{
						type: 'common',
						rarity: 2,
						qty: 18,
					},
				],
			},
			{
				phase: ['4', '5'],
				cost: 100000,
				material: [
					{
						type: 'gem',
						rarity: 4,
						qty: 6,
					},
					{
						type: 'boss',
						rarity: 4,
						qty: 12,
					},
					{
						type: 'local',
						rarity: 1,
						qty: 45,
					},
					{
						type: 'common',
						rarity: 3,
						qty: 12,
					},
				],
			},
			{
				phase: ['5', '6'],
				cost: 120000,
				material: [
					{
						type: 'gem',
						rarity: 5,
						qty: 6,
					},
					{
						type: 'boss',
						rarity: 4,
						qty: 20,
					},
					{
						type: 'local',
						rarity: 1,
						qty: 60,
					},
					{
						type: 'common',
						rarity: 3,
						qty: 24,
					},
				],
			},
		],
		TALENT_LEVEL: [
			{
				phase: ['1', '2'],
				cost: 12500,
				material: [
					{
						type: 'book',
						rarity: 2,
						qty: 3,
					},
					{
						type: 'common',
						rarity: 1,
						qty: 6,
					},
					{
						type: 'weekly',
						qty: false,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['2', '3'],
				cost: 17500,
				material: [
					{
						type: 'book',
						rarity: 3,
						qty: 2,
					},
					{
						type: 'common',
						rarity: 2,
						qty: 3,
					},
					{
						type: 'weekly',
						qty: false,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['3', '4'],
				cost: 25000,
				material: [
					{
						type: 'book',
						rarity: 3,
						qty: 4,
					},
					{
						type: 'common',
						rarity: 2,
						qty: 4,
					},
					{
						type: 'weekly',
						qty: false,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['4', '5'],
				cost: 30000,
				material: [
					{
						type: 'book',
						rarity: 3,
						qty: 6,
					},
					{
						type: 'common',
						rarity: 2,
						qty: 6,
					},
					{
						type: 'weekly',
						qty: false,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['5', '6'],
				cost: 37500,
				material: [
					{
						type: 'book',
						rarity: 3,
						qty: 9,
					},
					{
						type: 'common',
						rarity: 2,
						qty: 9,
					},
					{
						type: 'weekly',
						qty: false,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['6', '7'],
				cost: 120000,
				material: [
					{
						type: 'book',
						rarity: 4,
						qty: 4,
					},
					{
						type: 'common',
						rarity: 3,
						qty: 4,
					},
					{
						type: 'weekly',
						rarity: 5,
						qty: 1,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['7', '8'],
				cost: 260000,
				material: [
					{
						type: 'book',
						rarity: 4,
						qty: 6,
					},
					{
						type: 'common',
						rarity: 3,
						qty: 6,
					},
					{
						type: 'weekly',
						qty: 1,
						rarity: 5,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['8', '9'],
				cost: 450000,
				material: [
					{
						type: 'book',
						rarity: 4,
						qty: 12,
					},
					{
						type: 'common',
						rarity: 3,
						qty: 9,
					},
					{
						type: 'weekly',
						qty: 2,
						rarity: 5,
					},
					{
						type: 'crown',
						qty: false,
					},
				],
			},
			{
				phase: ['9', '10'],
				cost: 700000,
				material: [
					{
						type: 'book',
						rarity: 4,
						qty: 16,
					},
					{
						type: 'common',
						rarity: 3,
						qty: 12,
					},
					{
						type: 'weekly',
						qty: 2,
						rarity: 5,
					},
					{
						type: 'crown',
						qty: 1,
						rarity: 5,
					},
				],
			},
		],
	},
}

export default Leveling
