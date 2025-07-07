<script>
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
      })
    })
</script>