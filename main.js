
/*OPENING DOMContentLoaded*/

document.addEventListener("DOMContentLoaded", function(event) {

    let infoUserid = {
        firstName: '',
        lastName: '',
        telNumber: '',
    };
    let blanKt = '';
    
    
    /*MODAL CODE*/
    
    let modal = document.getElementById('miModal');
    let flex = document.getElementById('flex');
    let openModal = document.getElementById('abrir');
    let closeModal = document.getElementById('close');
    
    openModal.addEventListener('click', function(){
        modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function () {
        modal.style.display= 'none';
    });
    
    window.addEventListener('click', function (eventClosewindow) {
        if(eventClosewindow.target == flex){modal.style.display='none';};
    
    });
    
    /* Cupcake Modal*/
    let modalCupcake = document.getElementById('miModalCupcake');
    let flexCupcake = document.getElementById('flexCupcake');
    let openModalCupcake = document.getElementById('abrirCupcake');
    let closeModalcup = document.getElementById('cerrarCupcake');
    
    
    
    openModalCupcake.addEventListener('click', function(){
        modalCupcake.style.display = 'block';
    });
    
    closeModalcup.addEventListener('click', function () {
        modalCupcake.style.display= 'none';
    });
    
    window.addEventListener('click', function (eventClosewindow) {
        if(eventClosewindow.target == flexCupcake){modalCupcake.style.display='none';};
    
    });
    /* Luna Modal*/
    let modalLuna = document.getElementById('miModalLuna');
    let flexLuna = document.getElementById('flexLuna');
    let openModalLuna = document.getElementById('lunaAbrir');
    let closeModalLuna = document.getElementById('cerrarLuna');



    openModalLuna.addEventListener('click', function(){
        modalLuna.style.display = 'block';
    });

    closeModalLuna.addEventListener('click', function () {
        modalLuna.style.display= 'none';
    });

    window.addEventListener('click', function (eventClosewindow) {
        if(eventClosewindow.target == flexLuna){modalLuna.style.display='none';};

    });
    /*Cleo Modal*/
    let modalCleo = document.getElementById('miModalCleo');
    let flexCleo = document.getElementById('flexCleo');
    let openModalCleo = document.getElementById('cleoAbrir');
    let closeModalCleo = document.getElementById('cerrarCleo');



    openModalCleo.addEventListener('click', function(){
        modalCleo.style.display = 'block';
    });

    closeModalCleo.addEventListener('click', function () {
        modalCleo.style.display= 'none';
    });

    window.addEventListener('click', function (eventClosewindow) {
        if(eventClosewindow.target == flexCleo){modalCleo.style.display='none';};

    });
    /*Rocco Modal*/
    let modalRocco = document.getElementById('miModalRocco');
    let flexRocco = document.getElementById('flexRocco');
    let openModalRocco = document.getElementById('roccoAbrir');
    let closeModalRocco = document.getElementById('cerrarRocco');



    openModalRocco.addEventListener('click', function(){
        modalRocco.style.display = 'block';
    });

    closeModalRocco.addEventListener('click', function () {
        modalRocco.style.display= 'none';
    });

    window.addEventListener('click', function (eventClosewindow) {
        if(eventClosewindow.target == flexRocco){modalRocco.style.display='none';};

    });
    
    /*Toby Modal*/
    let modalToby = document.getElementById('miModalToby');
    let flexToby = document.getElementById('flexToby');
    let openModalToby = document.getElementById('tobyAbrir');
    let closeModalToby = document.getElementById('cerrarToby');



    openModalToby.addEventListener('click', function(){
        modalToby.style.display = 'block';
    });

    closeModalToby.addEventListener('click', function () {
        modalToby.style.display= 'none';
    });

    window.addEventListener('click', function (eventClosewindow) {
        if(eventClosewindow.target == flexToby){modalToby.style.display='none';};

    });

    

/*Continue Button*/ 

let continueInfo = document.getElementById('botonContinuar');
let continueCupinfo = document.getElementById('botonCupcontinuar');
let continueLunainfo = document.getElementById('botonLunacontinuar');
let continueCleoinfo = document.getElementById('botonCleocontinuar');
let continueRoccoinfo = document.getElementById('botonRoccocontinuar');
let continueTobyinfo = document.getElementById('botonTobycontinuar');

continueInfo.addEventListener('click', function(){

   

infoUserid.firstName = prompt('Please, enter your first name ' );
while (infoUserid.firstName == blanKt || infoUserid.firstName == null) {
    infoUserid.firstName = prompt('Please, enter your first name ' );
};

infoUserid.lastName = prompt('Please, enter your last name : ');
while (infoUserid.lastName == blanKt || infoUserid.lastName == null) {
    infoUserid.lastName = prompt('Please, enter your last name : ');
};

infoUserid.telNumber = prompt('Please, enter your contact number: ');
while (infoUserid.telNumber == blanKt || infoUserid.telNumber == null) {
    infoUserid.telNumber = prompt('Please, enter your contact number: ');
};

  


    alert('Hello, ' + infoUserid.firstName + ' ' + infoUserid.lastName + '.');
    alert('Soon, one of our workers will communicate with you for continue the process.');
});

continueCupinfo.addEventListener('click', function(){

   

infoUserid.firstName = prompt('Please, enter your first name ' );
while (infoUserid.firstName == blanKt || infoUserid.firstName == null) {
    infoUserid.firstName = prompt('Please, enter your first name ' );
};

infoUserid.lastName = prompt('Please, enter your last name : ');
while (infoUserid.lastName == blanKt || infoUserid.lastName == null) {
    infoUserid.lastName = prompt('Please, enter your last name : ');
};

infoUserid.telNumber = prompt('Please, enter your contact number: ');
while (infoUserid.telNumber == blanKt || infoUserid.telNumber == null) {
    infoUserid.telNumber = prompt('Please, enter your contact number: ');
};

  


    alert('Hello, ' + infoUserid.firstName + ' ' + infoUserid.lastName + '.');
    alert('Soon, one of our workers will communicate with you for continue the process.');
});

continueLunainfo.addEventListener('click', function(){
   
infoUserid.firstName = prompt('Please, enter your first name ' );
while (infoUserid.firstName == blanKt || infoUserid.firstName == null) {
    infoUserid.firstName = prompt('Please, enter your first name ' );
};

infoUserid.lastName = prompt('Please, enter your last name : ');
while (infoUserid.lastName == blanKt || infoUserid.lastName == null) {
    infoUserid.lastName = prompt('Please, enter your last name : ');
};

infoUserid.telNumber = prompt('Please, enter your contact number: ');
while (infoUserid.telNumber == blanKt || infoUserid.telNumber == null) {
    infoUserid.telNumber = prompt('Please, enter your contact number: ');
};

  


    alert('Hello, ' + infoUserid.firstName + ' ' + infoUserid.lastName + '.');
    alert('Soon, one of our workers will communicate with you for continue the process.');
});
continueCleoinfo.addEventListener('click', function(){
   
infoUserid.firstName = prompt('Please, enter your first name ' );
while (infoUserid.firstName == blanKt || infoUserid.firstName == null) {
    infoUserid.firstName = prompt('Please, enter your first name ' );
};

infoUserid.lastName = prompt('Please, enter your last name : ');
while (infoUserid.lastName == blanKt || infoUserid.lastName == null) {
    infoUserid.lastName = prompt('Please, enter your last name : ');
};

infoUserid.telNumber = prompt('Please, enter your contact number: ');
while (infoUserid.telNumber == blanKt || infoUserid.telNumber == null) {
    infoUserid.telNumber = prompt('Please, enter your contact number: ');
};

  


    alert('Hello, ' + infoUserid.firstName + ' ' + infoUserid.lastName + '.');
    alert('Soon, one of our workers will communicate with you for continue the process.');
});
/*Rocco Button*/
continueRoccoinfo.addEventListener('click', function(){
   
    infoUserid.firstName = prompt('Please, enter your first name ' );
    while (infoUserid.firstName == blanKt || infoUserid.firstName == null) {
        infoUserid.firstName = prompt('Please, enter your first name ' );
    };
    
    infoUserid.lastName = prompt('Please, enter your last name : ');
    while (infoUserid.lastName == blanKt || infoUserid.lastName == null) {
        infoUserid.lastName = prompt('Please, enter your last name : ');
    };
    
    infoUserid.telNumber = prompt('Please, enter your contact number: ');
    while (infoUserid.telNumber == blanKt || infoUserid.telNumber == null) {
        infoUserid.telNumber = prompt('Please, enter your contact number: ');
    };
    
      
    
    
        alert('Hello, ' + infoUserid.firstName + ' ' + infoUserid.lastName + '.');
        alert('Soon, one of our workers will communicate with you for continue the process.');
    });
/*Toby Button*/
continueTobyinfo.addEventListener('click', function(){
   
    infoUserid.firstName = prompt('Please, enter your first name ' );
    while (infoUserid.firstName == blanKt || infoUserid.firstName == null) {
        infoUserid.firstName = prompt('Please, enter your first name ' );
    };
    
    infoUserid.lastName = prompt('Please, enter your last name : ');
    while (infoUserid.lastName == blanKt || infoUserid.lastName == null) {
        infoUserid.lastName = prompt('Please, enter your last name : ');
    };
    
    infoUserid.telNumber = prompt('Please, enter your contact number: ');
    while (infoUserid.telNumber == blanKt || infoUserid.telNumber == null) {
        infoUserid.telNumber = prompt('Please, enter your contact number: ');
    };
    
      
    
    
        alert('Hello, ' + infoUserid.firstName + ' ' + infoUserid.lastName + '.');
        alert('Soon, one of our workers will communicate with you for continue the process.');
    });


let popUp = document.getElementById('popUp');
popUp.addEventListener('click', function(){
    alert('In one second, you could see the cutest pets waiting for your love.');
});

});
