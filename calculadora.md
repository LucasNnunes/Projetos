<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Calculadora</title>
  </head>
  <body>
    <script src="script.js"></script>
    <div class="fundo">
      <h1>Lucas Nunes</h1>
      <div class="calculadora">
        <h1>Calculadora</h1>
        <p id="resultado"></p>
        <table>
          <tr>
            <td><button class="botao" onclick="Clean()">C</button></td>
            <td><button class="botao" onclick="Back()"><</button></td>
            <td><button class="botao" onclick="Insert('/')">/</button></td>
            <td><button class="botao" onclick="Insert('*')">X</button></td>
          </tr>
          <tr>
            <td><button class="botao" onclick="Insert('7')">7</button></td>
            <td><button class="botao" onclick="Insert('8')">8</button></td>
            <td><button class="botao" onclick="Insert('9')">9</button></td>
            <td><button class="botao" onclick="Insert('-')">-</button></td>
          </tr>
          <tr>
            <td><button class="botao" onclick="Insert('4')">4</button></td>
            <td><button class="botao" onclick="Insert('5')">5</button></td>
            <td><button class="botao" onclick="Insert('6')">6</button></td>
            <td><button class="botao" onclick="Insert('+')">+</button></td>
          </tr>
          <tr>
            <td><button class="botao" onclick="Insert('1')">1</button></td>
            <td><button class="botao" onclick="Insert('2')">2</button></td>
            <td><button class="botao" onclick="Insert('3')">3</button></td>
            <td rowspan="2">
              <button class="botao igual" onclick="Calcular()">=</button>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button class="botao zero" onclick="Insert('0')">0</button>
            </td>
            <td><button class="botao" onclick="Insert('.')">.</button></td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
