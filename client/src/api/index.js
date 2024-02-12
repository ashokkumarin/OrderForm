export async function login({ email, password }) {
  console.log("inside login function");
    return await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        // If request is not successful, display error message
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
  
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  export async function submitOrder({ orders }) {
    return await fetch("/api/orderform/submitOrder", {
      method: "POST",
      body: JSON.stringify({ orders }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        // If request is not successful, display error message
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
  
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }