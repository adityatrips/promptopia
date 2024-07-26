import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';

export const GET = async (request, { params }) => {
	try {
		connectToDB();
		const { tagname } = params;

		const prompts = await Prompt.find({ tags: tagname }).populate('creator');

		return new Response(JSON.stringify(prompts), {
			status: 200,
		});
	} catch (error) {
		return new Response("Unable to fetch tag's prompts", { status: 500 });
	}
};
