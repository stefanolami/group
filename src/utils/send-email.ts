type FormData = {
	name: string
	email: string
	subject: string
	message: string
}

export async function sendEmail(data: FormData) {
	const apiEndpoint = '/api/email'

	try {
		const response = await fetch(apiEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const result = await response.json()

		if (!response.ok) {
			throw new Error(result.error || 'Failed to send email')
		}

		return { success: true, message: result.message }
	} catch (error) {
		if (error instanceof Error) {
			console.error('SEND EMAIL ERROR:', error.message)
			throw error
		} else {
			console.error('Unexpected SEND EMAIL ERROR:', error)
			throw new Error(
				'An unexpected error occurred while sending the email.'
			)
		}
	}
}
