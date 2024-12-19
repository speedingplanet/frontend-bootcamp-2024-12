import { generateProducts } from './generate-products';
import fsExtra from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function generateToFile(count = 1, fileName = 'products.json') {
	let products = generateProducts(count);

	// Get the path to the current folder
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	try {
		fsExtra.writeJSONSync(path.join(__dirname, `../data/${fileName}`), { products }, { spaces: 2 });
		console.log(`Finished writing products data to ${fileName}`);
	} catch (error) {
		console.error(`Could not write products to ${fileName} because `, error);
	}
}

generateToFile(100);
