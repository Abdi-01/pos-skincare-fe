import React from 'react';

function Register() {
    return (
    <div class="container">
        <div class="row align-items-center justify-content-center vh-100">
        <div class="col-lg-9">
        <div class="shadow">
            <div class="row">
                <div class="col-lg-5">
                    <div class="bg-register h-100"></div>
                </div>
                <div class="col-lg-7">
                    <div class="p-5 ps-4 text-dark">
                    <form>

    <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
    </div>

 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Username</label>
  </div>

 
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Confirmation Password</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Role</label>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

    </div>

  </div>
  <button type="submit" class="btn btn-primary btn-block mb-4">Create Account</button>
</form>

                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Register;
