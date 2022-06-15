function addUser() {
    var player1_name  =document.getElementById("player_1_name_input").value;
    var player2_name =document.getElementById("player_2_name_input").value;
    localStorage.setItem("player_1_name",player1_name);
    localStorage.setItem("player_2_name",player2_name);
    window.location="second.html";
}