var listaFilmes = ["https://ingresso-a.akamaihd.net/img/cinema/cartaz/23802-cartaz.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg", "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg", "https://bebe.abril.com.br/wp-content/uploads/2021/03/153732540_266315131528958_6346469775848774820_n.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}