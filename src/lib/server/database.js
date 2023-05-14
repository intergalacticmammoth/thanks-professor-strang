// Fake db until I get this to work with a real database
const db = new Map();

export function createMessage(name, email, oneLiner, message) {
    if (name === undefined) {
        throw new Error('Name is required');
    }
    if (email === undefined) {
        throw new Error('Email is required');
    }
    if (oneLiner.length > 100) {
        throw new Error('One liner must be less than 100 characters');
    }
    if (message.length > 300) {
        throw new Error('Message must be less than 300 characters');
    }

    const messages = db.get("messages");
    // TODO: notify front end??????
    for(const message of messages) {
        if (message.email === email) {
            let error = `User ${email} already submitted a message`;
            console.log(error);
            throw new Error(error);
        }
    }

    console.log('Creating message...');
    const uid = crypto.randomUUID();
    messages.push({
        id: uid,
        name: name,
        email: email,
        oneLiner: oneLiner,
        message: message
    });

    return uid;
}

export function deleteMessage(email, uid) {
    const messages = db.get("messages");
    const index = messages.findIndex((message) => message.email === email);
    if (messages[index].id !== uid) {
        console.log(`User ${email} tried to delete message with invalid uid ${uid}`);
        throw new Error(`Entered UID does not match. Please try again.`);
    }
    console.log(`Deleting message from ${email}...`);
    messages.splice(index, 1);
}

export function getMessages() {
    console.log('Getting all messages...');
    if (!db.get("messages")) {
        console.log('No messages found, creating empty array...');
        db.set("messages", []);
    }
    return db.get("messages");
}
