document.getElementById("file").addEventListener("change, fileSelect, false");

function fileSelect(evt)
{
    var upped = evt.target.files;

    var output = "";
    for (i = 0; i <= upped.lenth; i++)
    {
        output = upped[i].name + 
        "(" + upped[i].type + ")<br>" +
        upped[i].size + "bytes<br>" + 
        "Last Modified Date: " + upped[i].lastModifiedDate;
        document.getElementById("list").innerHTML += output + "<br><br> " ;

    }
}