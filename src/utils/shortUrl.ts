export function encodeUrl(str: string) {
	// utf8 -> bytes
	const encoder = new TextEncoder();
	const encodedBytes = encoder.encode(str);

	// bytes -> base64
	const base64EncodedStr = btoa(String.fromCharCode(...encodedBytes));

	// url safe base64
	const urlEncodedStr = base64EncodedStr.replaceAll('+', '-').replaceAll('/', '_');

	return urlEncodedStr;
}

export function decodeUrl(encodeStr: string | null) {
	if (!encodeStr || encodeStr === '') {
		return encodeStr;
	}

	// for url safe base64
	const urlDecodedStr = encodeStr.replaceAll('-', '+').replaceAll('_', '/');

	// base64 to bytes
	const base64DecodedStr = atob(urlDecodedStr);

	// bytes to utf8
	const decoder = new TextDecoder();
	const decodedBytes = decoder.decode(Uint8Array.from(base64DecodedStr, (c) => c.charCodeAt(0)));

	return decodedBytes;
}
