import { fail } from '@sveltejs/kit';
import { messages } from './data.js';
import * as db from '$lib/server/database.js'

export function load( {cookies} ) {
    const id = cookies.get('userid');

    if (!id) {
        cookies.set('userid', crypto.randomUUID(), { path: '/'});
    }

    return {
        messages: db.getMessages().map((message) => ({
            name: message.name,
            email: message.email,
            oneLiner: message.oneLiner,
            message: message.message
        }))
    };
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();

        try {
            const uid = db.createMessage(data.get('name'), data.get('email'), data.get('one-liner'), data.get('say-more'));
            return {
                success: true,
                uid: uid
            };
        } catch (error) {
            return fail(400, {
                error: error.message
            });
        }
    },
    delete: async ({ cookies, request }) => {
        const data = await request.formData();
        try {
            db.deleteMessage(data.get('email'), data.get('uid'));
            return {
                success: true,
                message: 'Message successfully deleted'
            };
        } catch (error) {
            return fail(400, {
                error: error.message
            });
        }
    }
};
