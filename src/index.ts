import { PrismaClient } from "@prisma/client";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const prisma = new PrismaClient();

async function main() {
	// Connect the client
	await prisma.$connect();
	// ... you will write your Prisma Client queries here
}

main()
	.then(async () => {
		console.log("masuk");
		// await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
