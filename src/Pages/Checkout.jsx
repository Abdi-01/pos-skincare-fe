import React from 'react';

function Checkout() {
    return (
    <div class="container">
        <div class="row align-items-center justify-content-center vh-100">
        <div class="col-lg-9">
        <div class="shadow">
            <div class="row">
                <div class="col-lg-5">
                    <div class="bg-register h-100"></div>
                </div>
               
                    <div class="p-5 ps-4 text-dark">
                    
                    <table class="table ">
  <thead>
    <tr class="table-secondary">
      <th scope="col">Nomor</th>
      <th scope="col">Nama Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<h2>Total Bayar</h2>
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Pilih Metode Pembayaran</button> 
</div>

<div class="card">
  <div class="card-body">
    BCA Bank Transfer
  </div>
</div>


                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
  
    )
}

export default Checkout;