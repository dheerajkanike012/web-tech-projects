document.getElementById("certificateForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const recipientName = document.getElementById("recipientName").value;
    const certificateDetails = document.getElementById("certificateDetails").value;
    
    // Here, you can send the data to the backend to create a new certificate.
    // This is just a demonstration of how you would capture the data.
  });
  
  function verifyCertificate() {
    const certificateKey = document.getElementById("certificateKey").value;
  
    // Here, you can send the certificateKey to the backend for verification.
    // After verification, display the result in the #verificationResult div.
  }
  