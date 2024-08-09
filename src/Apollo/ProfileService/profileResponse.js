export const userResponse = `
created_at
created_by
user_id
user_type
user_name
name
email
email_verified
password
device_id
active
profile_image_urls{
	image_type
	url
}
`;

export const sessionResponse = `
created_at
created_by
session_token
user_id
user_type
device_id
login_method
last_accessed
expiry
`;

export const serviceResponse = `
status
error
message
version
service
`;

export const loginResponse = `
    user {
        ${userResponse}
    }
    session {
        ${sessionResponse}
    }
`;
