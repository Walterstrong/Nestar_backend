export enum Message {
	SOMETHING_WENT_WRONG = 'Something went wrong',
	NO_DATA_FOUND = 'No data found',
	CREATED_FAILED = 'Creation failed',
	UPDATED_FAILED = 'Updated failed',
	REMOVE_FAILED = 'Remove failed',
	UPLOAD_FAILED = 'Upload failed',
	BAD_REQUEST = 'Bad request',

	USED_MEMBER_NICK_OR_PHONE = 'Already used member nick or phone!',
	NO_MEMBER_NICK = 'No member nick',
	BLOCKED_USER = 'You have been blocked',
	WRONG_PASSWORD = 'Wrong password, try again',
	NOT_AUTHENTICATED = ' You are not authenticated, please login first!',
	TOKEN_NOT_EXIST = 'Bearer token is not provided',
	ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed only for members with specific roles',
	NOT_ALLOWED_REQEUST = 'Not Allowed Request',
	PROVIDE_ALLOWED_FORMAT = 'Please provide jpg, jpeg, or png file format',
	SELF_SUBSCRIPTION_DENIED = 'Self subscription is denied',
}
