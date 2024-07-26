import Prompt from '@/models/prompt';
import { connectToDB } from '@/utils/database';

export const POST = async (request, { params }) => {
	try {
		connectToDB();
		const { searchText } = await request.json();
		console.log(searchText);

		const prompts = await Prompt.find({
			$or: [
				{ tag: { $regex: searchText, $options: 'i' } },
				{ creatorName: { $regex: searchText, $options: 'i' } },
			],
		})
			.populate('creator')
			.exec();

		console.log(prompts);

		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Unable to fetch tag's prompts", { status: 500 });
	}
};
