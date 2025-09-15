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
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error('Send email error:', error)
			return { success: false, error: error.message }
		} else {
			console.error('Send email error:', error)
			return { success: false, error: 'An unexpected error occurred' }
		}
	}
}
