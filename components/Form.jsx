import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	return (
		<section className='w-full max-w-full flex-start flex-col'>
			<h1 className='head_text text-left'>
				<span className='blue_gradient'>{type}</span> post
			</h1>
			<p className='desc text-left max-w-md'>
				{type} and share amazing prompts with the world, and let your
				imagination run wild with AI-powered platform
			</p>

			<form
				onSubmit={handleSubmit}
				className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
			>
				<label htmlFor=''>
					<span className='font-satoshi font-semibold text-base text-gray-700'>
						Your AI prompt
					</span>
					<textarea
						value={post.prompt}
						placeholder='Write your prompt here'
						required
						className='form_textarea'
						onChange={(e) =>
							setPost({
								...post,
								prompt: e.target.value,
							})
						}
					></textarea>
				</label>
				<label htmlFor=''>
					<span className='font-satoshi font-semibold text-base text-gray-700'>
						Prompt tag{' '}
						<span className='font-normal'>
							(#product, #webdevelopment, #idea, ...)
						</span>
					</span>
					<input
						value={post.tag}
						placeholder='#tag'
						required
						className='form_input'
						onChange={(e) =>
							setPost({
								...post,
								tag: e.target.value,
							})
						}
					></input>
				</label>
				<div className='flex-end mx-3 mb-5 gap-4'>
					<Link
						href='/'
						className='text-gray-500 text-sm'
					>
						Cancel
					</Link>
					<button
						onClick={handleSubmit}
						type='submit'
						disabled={submitting}
						className='px-5 py-1.5 text-sm bg-primary rounded-full text-white'
					>
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;

// You are a professional web developer. I am going to provide you with a code snippet. Your job is to make it cleaner, more efficient, and more readable.
