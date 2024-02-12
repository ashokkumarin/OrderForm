export async function SubmitOrders({ orders }) {
    return await fetch("/api/orders/Orders", {
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