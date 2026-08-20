export const CONTACT_URL = 'https://lynxlinkage.com/api/v1/contact';

export type ContactPayload = {
	name: string;
	email: string;
	message: string;
	kind: 'mftik';
	company?: string;
};

export async function submitContact(payload: ContactPayload): Promise<void> {
	const res = await fetch(CONTACT_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	});

	if (!res.ok) {
		const data = (await res.json().catch(() => ({}))) as { error?: string };
		throw new Error(data.error || 'Could not send');
	}
}
