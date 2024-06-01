const StatusCode = {
	Unauthorized: 401,
	Forbidden: 403,
	TooManyRequests: 429,
	InternalServerError: 500
}

const ResCd = {
		SUCCESS:    200,
		REGISTERED: 201,
		NO_AUTH:    401,
		NOT_FOUND:  404,
		GONE:       410,
		SERVER_ERR: 500,
		USER_EXIST: 900,
		REG_WITH_OTHER:     901,
		EMAIL_NOT_VERIFIED: 902
}

const UserStat = {
	IN_REQUEST: 	'USTT0000',
	ACTIVE: 			'USTT0001',
	DORMANCY: 		'USTT0002',
	WITHDRAWAL: 	'USTT0003',
	BANNED: 			'USTT0004',
	LOCKED: 			'USTT0005',
	NOT_FOUND: 		'USTT0006',
	TOKN_EXPIRED: 'USTT0007', // JWT Token Expired
	NO_AUTH: 			'USTT0008', // Not authorized
	WRONG_PW: 		'USTT0009'
}

export { StatusCode, ResCd, UserStat }
