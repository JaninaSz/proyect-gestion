import React from 'react'
export const Main = () => {
  return (
<div class="cont-main" id="cont-main">
            <h1>Gestión</h1>
            <hr />
            <div>
                <p> Ingrese sus credenciales y será redirigido a la sección correspondiente.</p>
            </div>
            <div class="cuadro">
                <label for="user">Usuario: </label>
                <input name="user" id="user" type="text" placeholder="Nina" Usuario />
                <br />
                <label for="clave">Clave U: </label>
                <input id="clave" type="password" Clave /><br />
                <div class="cont-btn">
                    <a href="profesor.html"><button class="btn-login" onclick="validar()">
                            Ingresar
                        </button></a>
                </div>
            </div>
        </div>
  )
}