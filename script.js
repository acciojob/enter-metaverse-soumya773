//your JS code here. If required.
 document.getElementById("enterBtn").addEventListener("click", function() {
      const statusPara = document.getElementById("status");

      const newHeader = document.createElement("h1");
      newHeader.textContent = "Entered Metaverse";
      newHeader.id = "status";

      statusPara.replaceWith(newHeader);
    });