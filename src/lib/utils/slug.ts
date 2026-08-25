/** HTML `pattern` / server-side charset for instance slugs. */
export const SLUG_PATTERN = '[a-z0-9]([a-z0-9-]*[a-z0-9])?';

export const SLUG_MIN_LENGTH = 3;
export const SLUG_MAX_LENGTH = 32;

const SLUG_RE = new RegExp(`^${SLUG_PATTERN}$`);

/** Names that must not be requested as `*.mftik.app` hosts. */
export const RESERVED_SLUGS = [
	'www',
	'admin',
	'api',
	'root',
	'mail',
	'docs',
	'mftik',
	'ftp',
	'status',
	'support',
	'help',
	'blog',
	'cdn',
	'static'
] as const;

const RESERVED = new Set<string>(RESERVED_SLUGS);

export function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9-]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, SLUG_MAX_LENGTH);
}

/** Soft normalize while typing — keeps a trailing hyphen so multi-segment names stay editable. */
export function slugifyInput(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9-]+/g, '-')
		.replace(/^-+/, '')
		.slice(0, SLUG_MAX_LENGTH);
}

export function isReservedSlug(slug: string): boolean {
	return RESERVED.has(slug);
}

export function isValidSlug(slug: string): boolean {
	if (slug.length < SLUG_MIN_LENGTH || slug.length > SLUG_MAX_LENGTH) return false;
	if (!SLUG_RE.test(slug)) return false;
	if (isReservedSlug(slug)) return false;
	return true;
}

export function instanceHost(slug: string): string {
	return `${slugify(slug) || 'your-name'}.mftik.app`;
}
