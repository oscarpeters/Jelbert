var saveBtnMain = document.getElementById("save-btn-main");
saveBtnMain.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the contact information from the website
    var contact = {
        name: "Jelbert Oost",
        nickname: "Jelbert",
        lastname: "Oost",
        phone: "+31628962191",
        email: "jelbert.oost@perosystems.com",
        org: "PERO Systems",
        img: "https://raw.githubusercontent.com/oscarpeters/Latuny/main/assets/images/1557829345391.jpeg",
        logo: "https://raw.githubusercontent.com/oscarpeters/Latuny/main/assets/images/1557829345391.jpeg",
        url: "https://perosystems.com",
        title: "CCO",
    };
    // create a vcard file
    // var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
    var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nN:Oost;Jelbert" + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nTITLE:" + contact.title + "\nORG:PERO Systems" + "\nURL:" + contact.url + "\nEND:VCARD";
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = contact.name + ".vcf";
    newLink.textContent = contact.name;
    newLink.href = url;

    newLink.click();
});




