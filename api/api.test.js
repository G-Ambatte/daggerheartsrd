import request from 'supertest';
import app from './index.js';

import { describe, test, expect } from 'vitest';

describe('API Data tests', ()=>{
	describe('Negative tests', ()=>{
		test('Non-existent route returns 404', async ()=>{
			const response = await request(app).get('/api/shouldFail');
			expect(response.statusCode).toBe(404);
		});
	});
	describe('Category tests', ()=>{
		test('Returns 129 Adversaries', async ()=>{
			const response = await request(app).get('/api/adversaries');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(129);
		});

		test('Returns 18 Ancestries', async ()=>{
			const response = await request(app).get('/api/ancestries');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(18);
		});

		test('Returns 34 Armors', async ()=>{
			const response = await request(app).get('/api/armors');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(34);
		});

		test('Returns 24 Beastforms', async ()=>{
			const response = await request(app).get('/api/beastforms');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(24);
		});

		test('Returns 189 Cards', async ()=>{
			const response = await request(app).get('/api/cards');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(189);
		});

		test('Returns 9 Classes', async ()=>{
			const response = await request(app).get('/api/classes');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(9);
		});

		test('Returns 9 Communities', async ()=>{
			const response = await request(app).get('/api/communities');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(9);
		});

		test('Returns 60 Consumables', async ()=>{
			const response = await request(app).get('/api/consumables');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(60);
		});

		test('Returns 9 Domains', async ()=>{
			const response = await request(app).get('/api/domains');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(9);
		});

		test('Returns 19 Environments', async ()=>{
			const response = await request(app).get('/api/environments');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(19);
		});

		test('Returns 60 Loots', async ()=>{
			const response = await request(app).get('/api/loots');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(60);
		});

		test('Returns 18 Subclasses', async ()=>{
			const response = await request(app).get('/api/subclasses');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(18);
		});

		test('Returns 186 Weapons', async ()=>{
			const response = await request(app).get('/api/weapons');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(186);
		});

		test('Returns 12 Wheelchairs', async ()=>{
			const response = await request(app).get('/api/wheelchairs');
			expect(response.statusCode).toBe(200);
			expect(response.body).toHaveLength(12);
		});
	});
	describe('Individual item tests', ()=>{
		test('Return Adversary: Adult Flickerfly', async ()=>{
			const response = await request(app).get('/api/adversary/adult%20flickerfly');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Ancestry: Galapa', async ()=>{
			const response = await request(app).get('/api/ancestry/galapa');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Armor: Full Plate Armor', async ()=>{
			const response = await request(app).get('/api/armor/full%20plate%20armor');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Beastform: Epic Aquatic Beast', async ()=>{
			const response = await request(app).get('/api/beastform/epic%20aquatic%20beast');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Card: Flight', async ()=>{
			const response = await request(app).get('/api/card/flight');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Class: Seraph', async ()=>{
			const response = await request(app).get('/api/class/seraph');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Community: Wanderborne', async ()=>{
			const response = await request(app).get('/api/community/wanderborne');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Consumable: Bolster Potion', async ()=>{
			const response = await request(app).get('/api/consumable/bolster%20potion');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Domain: Bone', async ()=>{
			const response = await request(app).get('/api/domain/bone');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Environment: Divine Usurpation', async ()=>{
			const response = await request(app).get('/api/environment/divine%20usurpation');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Loot: Gem of Alacrity', async ()=>{
			const response = await request(app).get('/api/loot/gem%20of%20alacrity');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Subclass: Nightwalker', async ()=>{
			const response = await request(app).get('/api/subclass/nightwalker');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Weapon: Wand of Enthrallment', async ()=>{
			const response = await request(app).get('/api/weapon/wand%20of%20enthrallment');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});

		test('Return Wheelchair: Improved Arcane-Frame Wheelchair', async ()=>{
			const response = await request(app).get('/api/wheelchair/improved%20arcane-frame%20wheelchair');
			expect(response.statusCode).toBe(200);
			expect(response.body).toMatchSnapshot();
		});
	});
});
