    function validate() {
      let name = document.getElementById("name").value;
      let mobile = document.getElementById("mobile").value;
      let email = document.getElementById("email").value;

      if (!/^[A-Za-z][A-Za-z0-9]{5,}$/.test(name)) {
        alert("Invalid name");
        return false;
      }
      if (!/^\d{10}$/.test(mobile)) {
        alert("Invalid mobile");
        return false;
      }
      if (!/^[\w.-]+@[a-zA-Z]+\.[a-z]{2,}$/.test(email)) {
        alert("Invalid email");
        return false;
      }
      alert("Form submitted");
      return true;
    }

