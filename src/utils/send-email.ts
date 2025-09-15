type FormData = {
	name: string
	email: string
	subject: string
	message: string
}

export function sendEmail(data: FormData) {
	const apiEndpoint = '/api/email'

	fetch(apiEndpoint, {
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((response) => {
			alert(response.message)
		})
		.catch((err: unknown) => {
			const errorMessage = err instanceof Error ? err.message : 'An error occurred while sending the email'
			alert(errorMessage)
		})
}
