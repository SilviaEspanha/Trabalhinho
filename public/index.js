      // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    
  import { getDatabase, ref, get, set, child, push, update, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB7d2_gDpVAmd9_eJiBm6HvDzENZyZrM7s",
    authDomain: "trabalhinho-43003.firebaseapp.com",
    databaseURL: "https://trabalhinho-43003-default-rtdb.firebaseio.com",
    projectId: "trabalhinho-43003",
    storageBucket: "trabalhinho-43003.appspot.com",
    messagingSenderId: "123911645743",
    appId: "1:123911645743:web:537c7b5a3d943f0a34f4da"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
      const db=getDatabase();



      var nometut = document.getElementById("nomet");
      var nomepet = document.getElementById("nomep");
      var data = document.getElementById("data");
      var servico = document.getElementById("servico");
      var obs = document.getElementById("obs");
      var preco = 40;
      if (servico=="banho") servicoNome = "Banho";
      if (servico=="tosah") servicoNome = "Tosa Higiênica";
      if (servico=="tosagm") servicoNome = "Tosa Geral (máquina)";
      if (servico=="tosagt") servicoNome = "Tosa Geral (tesoura)";
      if (servico=="creched") servicoNome = "Creche (diária avulsa)";
      if (servico=="creches") servicoNome = "Creche (semanal)";
      if (servico=="crechem") servicoNome = "Creche (mensal)";
      if (servico=="levatraz") servicoNome = "Leva e Traz (km rodado)";

            
      let bt_gravar=document.getElementById("Gravar");
      bt_gravar.addEventListener('click',gravarDados());
      
      function gravarDados (){
        console.log ("OK1");
        /* -------- References ---------- */

        
             //const novaChave = push(child(ref(db), 'comprovantes')).key;
             //const novaChave = 10;
        console.log ("OK2");
             set(ref(db, "comprovantes/"+ 0),{
                  NOMETUTOR:nometut.value,
                  NOMEPETTY:nomepet.value,
                  DATASERVICO:data.value,
                  NOMESERVICO:servicoNome,
                  OBSERV:obs.value,
                  PRECOSERVICO:preco
             }).then(()=>{
                  console.log("incluído com sucesso");
             })
             .catch((error)=>{
                  console.log("erro de inclusão");
             })
        }
        
        