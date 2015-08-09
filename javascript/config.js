$(document).ready(function() {
	// init Save the Date
	save_the_date.init({
		weddingDate: "2015/06/20, 10:00", 
		//Date : enter your wedding date
    labels: ["jours", "heures", "minutes", "secondes"], 
		//Array of strings : labels of time units
		sendServerMessages: ["Merci! Votre message a bien été transmis à Alexandra et Boris.", "Désolé, une erreur est survenue et votre message n'a pas pu être transmis à Alexandra et Boris"],
		//Array of strings : Messages from the server on send
		
		gallery : [
			         "images/gallery/1.jpg", 
               "images/gallery/2.jpg", 
               "images/gallery/3.jpg", 
               "images/gallery/4.jpg", 
               "images/gallery/5.jpg", 
               "images/gallery/6.jpg", 
               "images/gallery/7.jpg", 
               "images/gallery/8.jpg", 
               "images/gallery/9.jpg", 
               "images/gallery/10.jpg", 
               "images/gallery/11.jpg", 
               "images/gallery/12.jpg", 
               "images/gallery/13.jpg", 
               "images/gallery/14.jpg", 
               "images/gallery/15.jpg",
               "images/gallery/16.jpg"],
		//Array image pathes
		titles : [
		          'Mairie', 
              'Mairie', 
              'Mairie', 
              'Mairie', 
              'Mairie', 
              'Cérémonie', 
              'Cérémonie', 
              'Cérémonie', 
              'Photos de groupes', 
              'Photos de groupes', 
              'Photos de groupes', 
              'Photos de groupes', 
              'Photos de groupes', 
              'Photos de groupes', 
              'Le dessert', 
              'Tango' ],
		//Array of strings : corresponding titles
		});	
});