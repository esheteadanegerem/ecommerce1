import React from 'react'
import Footter from '../Footter'
import image9 from '../../../assets/images/image9.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Delivery = () => {
  return (
    <div>
      <div className='container m-5 p-3'>
        <div className='row'>
          <div className='col'> <h3> Delivery Process and Policies</h3>
        <p>At Shopify, we strive to provide a smooth and reliable delivery experience for our customers.<br/> Here's what you need to know:</p>
        <p>
      <h4> Shipping Methods</h4>
Choose the shipping method that suits your needs:<br/>

<b>Standard Shipping:</b> Estimated delivery within 5-7 business days.<br/>
<b>Express Shipping:</b> Get your order within 2-3 business days.

 <h4>
 Shipping Costs
 </h4>
Shipping costs are calculated based on the total weight of your order and your delivery location. 



<h4>Delivery Areas</h4>
We currently deliver to the following regions:<br/>

<li>Addis Ababa</li>
<li>BahirDar</li>
<li>Hawassa and ohters</li>


 <h3>Customer Support</h3>
For any questions or concerns related to deliveries, our customer support team is here to help. Contact us with the contact page.
        </p></div>
          <div className='col'>
          <h3>  Promotions and Discounts</h3>
Enjoy free shipping on orders over $50!.
<img src={image9} alt='promotion' style={{width:'100%', height:'100%',borderRadius:'15px'}}></img></div>

        </div>
       
      </div>
      <Footter/>
    </div>
  )
}

export default Delivery
