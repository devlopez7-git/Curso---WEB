let usuarios = new Map();
usuarios.set('Lucas', 'Admin');
usuarios.set('Julia', 'User');
usuarios.set('Marcos', 'Admin');
usuarios.set('Fernanda', 'User');
usuarios.set('Amanda', 'User');
usuarios.set('Ricardo', 'User');
usuarios.set('Paula', 'Admin');
usuarios.set('Carlos', 'User');
usuarios.set('Beatriz', 'User');
usuarios.set('Rafael', 'Admin');
usuarios.set('Carolina', 'User');
usuarios.set('Thiago', 'Moderator');
usuarios.set('Isabela', 'User');
usuarios.set('Roberto', 'Admin');
usuarios.set('Patrícia', 'User');
usuarios.set('Gustavo', 'Admin');
usuarios.set('Larissa', 'User');
usuarios.set('Eduardo', 'Moderator');
usuarios.set('Vanessa', 'User');
usuarios.set('Felipe', 'User');
usuarios.set('Bruna', 'Admin');
usuarios.set('Diego', 'User');
usuarios.set('Renata', 'Admin');
usuarios.set('Samuel', 'User');
usuarios.set('Camila', 'User');
usuarios.set('Leonardo', 'Admin');
usuarios.set('Michele', 'User');
usuarios.set('Daniel', 'User');
usuarios.set('Sofia', 'Moderator');
usuarios.set('João', 'User');

function getUsersByRole(usuarios, role) {
	let filteredUsers = [];
	console.log(`Lista de ${role}s:`);

	for (let [key, value] of usuarios) {
		if (value === role) {
			filteredUsers.push(key);
		}
	}

	return filteredUsers;
}

// Mostra a lista de Admins, Moderadores e Usuários:
console.log(getUsersByRole(usuarios, 'Admin'));
console.log(getUsersByRole(usuarios, 'Moderator'));
console.log(getUsersByRole(usuarios, 'User'));

