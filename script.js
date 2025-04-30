//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click", function() {
      // Get the paragraph element
      const statusPara = document.getElementById("status");

      // Replace it with an <h1> tag
      const newHeader = document.createElement("h1");
      newHeader.textContent = "Entered Metaverse";
      newHeader.id = "status"; // maintain the same ID if needed

      // Replace paragraph with new header
      statusPara.replaceWith(newHeader);