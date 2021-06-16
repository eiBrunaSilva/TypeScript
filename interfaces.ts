interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: 'Vitor',
    email: 'hueheuheue'
  }
}

function setUser(usuario: Usuario){
  
}