document.addEventListener("DOMContentLoaded", function () {
  const monthsBR = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const tableDays = document.getElementById("dias");

  function GetDaysCalendar(mes, ano) {
    document.getElementById("mes").innerHTML = monthsBR[mes];
    document.getElementById("ano").innerHTML = ano;

    let firstDayOfWeek = new Date(ano, mes, 1).getDay() - 1;
    let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

    for (
      var i = -firstDayOfWeek, index = 0;
      i < 42 - firstDayOfWeek;
      i++, index++
    ) {
      let dt = new Date(ano, mes, i);
      let dayTable = tableDays.getElementsByTagName("td")[index];
      dayTable.classList.remove("mes-anterior");
      dayTable.classList.remove("proximo-mes");
      dayTable.classList.remove("dia-atual");
      dayTable.innerHTML = dt.getDate();
      if (
        dt.getFullYear == dt.getFullYear() &&
        dt.getMonth() == dt.getMonth() &&
        dt.getDate() == dt.getDate()
      ) {
        dayTable.classList.add("dia-atual");
      }
      if (i < 1) {
        dayTable.classList.add("mes-anterior");
      }
      if (i > getLastDayThisMonth) {
        dayTable.classList.add("proximo-mes");
      }
    }
  }
  let now = new Date();
  let mes = now.getMonth();
  let ano = now.getFullYear();
  GetDaysCalendar(mes, ano);
  const botao_anterior = document.getElementById("btn_prev");
  const botao_proximo = document.getElementById("btn_next");
  botao_proximo.onclick = function () {
    mes++;

    ano++;
    GetDaysCalendar(mes, ano);
  };
  botao_anterior.onclick = function () {
    mes--;

    mes = 11;
    ano--;
    GetDaysCalendar(mes, ano);
  };
});
