$(document).ready(function() {
	// init Save the Date
	save_the_date.init({
		weddingDate: "2015/06/20, 10:00", 
		//Date : enter your wedding date
    labels: ["jours", "heures", "minutes", "secondes"], 
		//Array of strings : labels of time units
		sendServerMessages: ["Merci! Votre message a bien été transmis à Alexandra et Boris.", "Désolé, une erreur est survenue et votre message n'a pas pu être transmis à Alexandra et Boris"],
		//Array of strings : Messages from the server on send
		
		gallery : ["images/gallery/1.JPG", 
               "images/gallery/2.jpg", 
               "images/gallery/3.jpg", 
               "images/gallery/4.jpg", 
               "images/gallery/5.jpg", 
               "images/gallery/6.jpg", 
               "images/gallery/7.JPG", 
               "images/gallery/8.jpg", 
               "images/gallery/9.jpg", 
               "images/gallery/10.JPG", 
               "images/gallery/11.JPG", 
               "images/gallery/12.JPG", 
               "images/gallery/13.JPG", 
               "images/gallery/14.jpg", 
               "images/gallery/15.jpg"],
		//Array image pathes
		titles : ['Plage de Demre, Turquie', 
              'Au bord du lac, Annecy', 
              'Station de Bonascre, Pyrénées', 
              'Stop dans la puna, Argentine', 
              'Quebrada de las Flechas, Argentina', 
              'Salinas Gandes, Argentina', 
              'Sacré Soirée', 
              'Sur les toits de Paris', 
              'Grand Canyon, USA', 
              'Grand saut à Monument Valley, USA', 
              'YellowStone, USA', 
              'Death Valley, USA', 
              'Rando neige près de Grenoble', 
              'Trek dans les Annapurnas, Nepal', 
              'Cats in London' ],
		//Array of strings : corresponding titles
		});	
});