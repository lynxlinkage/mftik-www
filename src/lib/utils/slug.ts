export function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9-]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 32);
}

export function instanceHost(slug: string): string {
	return `${slugify(slug) || 'your-name'}.mftik.app`;
}
