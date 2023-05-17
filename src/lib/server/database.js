import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import { UserMessage } from '$lib/types';

const db = new Database(DB_PATH, { verbose: console.info });

// Self-executed function to initialize the database
(() => {
	console.info('Initializing database...');
	// Create users table if it doesn't exist
	// Note: ROWID is built-in for every table in sqlite
	db.exec(`
		CREATE TABLE IF NOT EXISTS users (
			name TEXT NOT NULL,
			email TEXT NOT NULL,
			password TEXT NOT NULL,
			bio TEXT NOT NULL,
			message TEXT NOT NULL,
			date TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
		);
	`);
})();

export function createMessage(name, email, password, bio, message) {
	if (name === undefined) {
		throw new Error('Name is required');
	}
	if (email === undefined) {
		throw new Error('Email is required');
	}
	if (password === undefined) {
		throw new Error('Password is required');
	}
	if (bio.length > 100) {
		throw new Error('Bio must be less than 100 characters');
	}
	if (message.length > 300) {
		throw new Error('Message must be less than 300 characters');
	}

	const stmt = db.prepare(`
		INSERT INTO users (name, email, password, bio, message)
		VALUES (?, ?, ?, ?, ?);
	`);
	const info = stmt.run(name, email, password, bio, message);
	return info.lastInsertRowid;
}

export function deleteMessage(email, password) {
	// Check if message exists and email matches password
	const stmt = db.prepare(`
		SELECT * FROM users
		WHERE email = ?;
	`);
	const message = stmt.get(email);
	if (message === undefined) {
		console.info(`User ${email} tried to delete message that doesn't exist`);
		throw new Error(`User with email ${email} does not exist`);
	}
	if (message.password !== password) {
		console.info(`User ${email} tried to delete message with wrong password: ${password}`);
		throw new Error(`Password and email do not match. Please try again.`);
	}

	// Delete message
	const stmt2 = db.prepare(`
		DELETE FROM users
		WHERE email = ?;
	`);
	const info = stmt2.run(email);
	return info.changes;
}

export function getMessages() {
	const stmt = db.prepare(`
		SELECT * FROM users ORDER BY date DESC;
	`);
	return stmt.all();
}
