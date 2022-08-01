document.addEventListener("DOMContentLoaded", function () {
  const monthsBR = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
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
    let currentDay = new Date().getDay();

    for (var i = -firstDayOfWeek; i < 42 - firstDayOfWeek; i++) {
      let dt = new Date(ano, mes, i);
      let dayTable = tableDays.getElementsByTagName("td")[i];
      if (dayTable) {
        const tdClassList = dayTable.classList;
        tdClassList.remove("mes-anterior");
        tdClassList.remove("proximo-mes");
        tdClassList.remove("dia-atual");
        dayTable.innerHTML = dt.getDate();

        if (i < 1) {
          tdClassList.add("mes-anterior");
        }
        if (i > getLastDayThisMonth) {
          tdClassList.add("proximo-mes");
        }
        if (currentDay) {
          if (dayTable.innerHTML == currentDay) {
            if (!tdClassList.contains("proximo-mes")) {
              if (now.getMonth() === mes && now.getFullYear() === ano) {
                tdClassList.add("dia-atual");
              }
            }
          }
        }
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

    if (mes === 12) {
      mes = 0;
      ano++;
    }
    GetDaysCalendar(mes, ano);
  };
  botao_anterior.onclick = function () {
    mes--;
    if (mes === -1) {
      mes = 11;
      ano--;
    }

    GetDaysCalendar(mes, ano);
  };
});
