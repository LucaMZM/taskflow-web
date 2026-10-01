const appName = "TaskFlow Web";

console.log(appName);

function iniciarApp() {
    console.log("Aplicación iniciada");
}

function login(usuario, password) {
    if (usuario && password) {
        console.log("Usuario autenticado");
        return true;
    }

    console.log("Credenciales incorrectas");
    return false;
}

iniciarApp();
