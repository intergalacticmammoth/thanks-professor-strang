import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		messages: db.getMessages().map((message) => {
			const parsedDate = new Date(message.date);
			const options = { day: 'numeric', month: 'long', year: 'numeric' };
			const formattedDate = parsedDate.toLocaleDateString('en-DE', options);
			return {
				name: message.name,
				email: message.email,
				bio: message.bio,
				message: message.message,
				date: formattedDate
			};
		})
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		try {
			const uid = db.createMessage(
				data.get('name'),
				data.get('email'),
				data.get('password'),
				data.get('bio'),
				data.get('message')
			);
			return {
				success: true,
				uid: uid
			};
		} catch (error) {
			console.error(error);
			let message = error.message;
			if (error.message.includes('UNIQUE constraint failed')) {
				message = 'This email was already used for submitting a message.';
			}
			return fail(400, {
				error: message
			});
		}
	},
	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			db.deleteMessage(data.get('email'), data.get('password'));
			return {
				success: true,
				message: 'Message successfully deleted'
			};
		} catch (error) {
			console.error(error);
			return fail(400, {
				error: error.message
			});
		}
	}
};
