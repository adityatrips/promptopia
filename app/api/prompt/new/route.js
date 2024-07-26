import { connectToDB } from '@/utils/database';
import Prompt from '@/models/prompt';
import user from '@/models/user';

export const POST = async (req, res) => {
	const { prompt, userId, tag } = await req.json();

	try {
		await connectToDB();

		const User = await user.findById(userId);

		console.log(User.username);

		const newPrompt = new Prompt({
			creator: userId,
			creatorName: User.username,
			tag,
			prompt,
		});

		await newPrompt.save();
		return new Response(JSON.stringify(newPrompt), {
			status: 201,
		});
	} catch (error) {
		console.log(error);
		return new Response('Failed to create a new prompt', {
			status: 500,
		});
	}
};
