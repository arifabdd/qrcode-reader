 // When scan is successful fucntion will produce data
 function onScanSuccess(qrCodeMessage) {
    document.getElementById("result").innerHTML =
      '<span class="result">' + qrCodeMessage + "</span>";
  }
  
  // When scan is unsuccessful fucntion will produce error message
  function onScanError(errorMessage) {
    // Handle Scan Error
  }
  
  // Setting up Qr Scanner properties
  var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250
  });
  
  // in
  html5QrCodeScanner.render(onScanSuccess, onScanError);
