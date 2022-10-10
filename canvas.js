function dibujarAhorcado(){
    
    contexto.lineWidth = 5;
    contexto.lineCap = "round";
    contexto.lineJoin = "round";
    contexto.fillStyle = "white";
    contexto.strokeStyle = "black";
    contexto.shadowColor = "black";
    contexto.shadowBlur = 7;
    contexto.shadowOffsetX = 5;
    contexto.shadowOffsetY = 5;

        contexto.fillRect(0, 0, 940, 700);
        contexto.beginPath();
        //base
        contexto.moveTo(150, 400);
        contexto.lineTo(300, 400);
        //palo
        contexto.moveTo(180, 90);
        contexto.lineTo(180, 400);
        //techo
        contexto.moveTo(180, 90);
        contexto.lineTo(250, 90);
        //soga
        contexto.moveTo(250, 150);
        contexto.lineTo(250, 90);   
        contexto.stroke();
        contexto.closePath();
 
         //cabeza
        contexto.beginPath();
        var X = lienzo.width / 1.5;
        var Y = lienzo.height / 4.6;
        var r = 35;
        contexto.strokeStyle = "#006400";
        contexto.fillStyle = "#6ab150";
        contexto.lineWidth = 5;
        contexto.arc(X, Y, r, 0, 2 * Math.PI);
        contexto.fill();
        contexto.stroke();
        contexto.closePath(); 


        //cuerpo
        contexto.beginPath();
        // El centro del circulo (X,Y) cuyo sector vamos a dibujar, y el radio R de este.
        var X = lienzo.width / 1.5;
        var Y = 190;
        var R = 100;
        // El ángulo de partida ap y el ángulo final af
        var ap = (Math.PI / 180) * 60;
        var af = (Math.PI / 180) * 120;
        // Las coordenadas del punto de partida en la circunferencia
        var Xap = X + R * Math.cos(ap);
        var Yap = Y + R * Math.sin(ap);

        // estilos
        contexto.fillStyle = "#6ab150";
        contexto.strokeStyle = "#006400";
        contexto.lineWidth = 5;
        // empezamos a dibujar
        contexto.beginPath();
        contexto.moveTo(X, Y);
        contexto.lineTo(Xap, Yap);
        contexto.arc(X, Y, R, ap, af);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();    

        
        contexto.strokeStyle = "#006400";
        contexto.lineWidth = 5;
        contexto.beginPath();
        //pierna izq
        contexto.moveTo(610, 290);
        contexto.lineTo(610, 350);
        //pierna der
        contexto.moveTo(640, 290);
        contexto.lineTo(640, 350);
        //bra izq
        contexto.moveTo(570, 220);
        contexto.lineTo(600, 230);
        //bra der
        contexto.moveTo(680, 220);
        contexto.lineTo(650, 230);
        contexto.fill();
        contexto.stroke();
        contexto.closePath(); 
}


 function cantidadErrores(){ 
    contexto.lineWidth = 3;
    contexto.lineCap = "round";
    contexto.lineJoin = "round";  
    contexto.strokeStyle = "#C70039";
    contexto.fillStyle = "#EC7063";

        //cabeza en horca
        contexto.beginPath();
        var X = lienzo.width /3.8;
        var Y = lienzo.height / 4.9;
        var r = 20;
        contexto.arc(X, Y, r, 0, 2 * Math.PI);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();

         //cuerpo en horca
        contexto.beginPath();
        // El centro del circulo (X,Y) cuyo sector vamos a dibujar, y el radio R de este.
        var X = lienzo.width / 3.8;
        var Y = 165;
        var R = 60;
        // El ángulo de partida ap y el ángulo final af
        var ap = (Math.PI / 180) * 60;
        var af = (Math.PI / 180) * 120;
        // Las coordenadas del punto de partida en la circunferencia
        var Xap = X + R * Math.cos(ap);
        var Yap = Y + R * Math.sin(ap);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();

        // empezamos a dibujar
        contexto.beginPath();
        contexto.moveTo(X, Y);
        contexto.lineTo(Xap, Yap);
        contexto.arc(X, Y, R, ap, af); 
        contexto.closePath();   
        contexto.fill();
        contexto.stroke();    
    
        contexto.beginPath();
        //pierna izq ahorcado
        contexto.moveTo(240, 225);
        contexto.lineTo(240, 250);
        //pierna der ahorcado
        contexto.moveTo(250, 225);
        contexto.lineTo(250, 250);
        //bra izq ahorcado
        contexto.moveTo(240, 180);
        contexto.lineTo(220, 190);
        //bra der ahorcado
        contexto.moveTo(255, 180);
        contexto.lineTo(270, 190);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
}  