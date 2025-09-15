'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { sendEmail } from '@/utils/send-email'
import { useState } from 'react'

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm()
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = async (data) => {
		setIsLoading(true)

		try {
			const result = await sendEmail(data)

			if (result.success) {
				toast.success('Message sent successfully!', {
					description: "We'll get back to you soon.",
				})
				reset() // Clear the form
			} else {
				toast.error('Failed to send message', {
					description: result.error || 'Please try again later.',
				})
			}
		} catch (error) {
			toast.error('Something went wrong', {
				description: 'Please check your connection and try again.',
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="w-full">
			<h1 className="font-unna font-bold text-xl xl:text-[36px] text-primary mb-4 xl:mb-10">
				CONTACT
			</h1>
			<form
				className="text-sm xl:text-base"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="xl:flex flex-row items-center justify-center gap-3">
					<input
						type="text"
						placeholder="Name"
						className="w-full font-jose text-primary border-2 mb-3 border-primary-light focus:border-primary bg-grey p-2 outline-none shadow-sm focus:shadow-md"
						{...register('name', { required: true })}
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full font-jose text-primary border-2 mb-3 border-primary-light focus:border-primary bg-grey p-2 outline-none shadow-sm focus:shadow-md"
						{...register('email', { required: true })}
					/>
				</div>
				<input
					type="subject"
					placeholder="Subject"
					className="w-full font-jose text-primary border-2 mb-3 border-primary-light focus:border-primary bg-grey p-2 outline-none shadow-sm focus:shadow-md"
					{...register('subject', { required: true })}
				/>
				<textarea
					rows={4}
					placeholder="How can we be of service?"
					className="w-full xl:h-64 resize-none font-jose text-primary border-2 mb-3 border-primary-light focus:border-primary bg-grey p-2 outline-none shadow-sm focus:shadow-md"
					{...register('message', { required: true })}
				></textarea>
				<button
					type="submit"
					disabled={isLoading}
					className="ml-auto block h-6 xl:h-8 w-28 xl:w-44 bg-primary font-jose font-bold text-xs xl:text-lg text-white rounded-md shadow-md hover:shadow-xl hover:brightness-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isLoading ? 'Sending...' : 'Send'}
				</button>
			</form>
		</div>
	)
}
