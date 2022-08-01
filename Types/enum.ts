// Enums allow to define a set of named constants.
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const testEnum = {
	role: Role.READ_ONLY,
};

if (testEnum.role === Role.READ_ONLY) {
	console.log('Role is Read Only');
}
