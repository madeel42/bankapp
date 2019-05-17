<!DOCTYPE html>
<html lang="en">
<head>
    <title>bankapp</title>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!--bootstraplink-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        
        
            <!-- Bootstrap  -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        <style>
       #imgstyle{
        width: 25%;
        }
        #maincsacreen{
            text-align: center;
        }
        #Signup, #Signin{
            width: 21vw;
            margin: auto;
        }
       #tablestle{
            width: 54vw;
    margin: auto;
        }
        </style>
        
            <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
<body>
    <div id="bankapplication">
        <div id="dashboard" class="hide">
                <nav>
                       <div>
                           <span class="brand-logo">HBL BANK</span>
                       </div>
                      </nav>
                      <table id="tablestle">
                          <tr>
                            <td>Name</td>
                            <td id="accountName"></td>
                          </tr>
                          <tr>
                            <td>Balance</td>
                            <td id="accountBalance"></td>
                          </tr>
                          <tr>
                              <td><input id="withdrawAmount" type="text"></td>
                              <td><button id="withdrawBTN">Withdraw</button>
                              <button id="depositBTN">Deposite</button></td>
                              <td>
                                    <div class="btn-group">
                                            <button type="button" class="btn btn-danger" id="transferAmmount">Transfer</button>
                                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu" id="drop">
                    
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                            <div>
                                                <h3 style="color:salmon" id="rN"></h3>
                                            </div>
                                        </td>


                              </td>
                              
                          </tr>
                          
                         
 

                      </table>
                      <table>
                            <thead>
                              <tr>
                                <th>DATE</th>
                                <th>NATURE</th>
                                <th>TRANSACTION TYPE</th>
                                <th>AMOUNT</th>
                              </tr>
                            </thead>
                    
                            <tbody id="transactionsTable">
                    
                            </tbody>
                          </table>

        </div>
        <div id="maincsacreen">
         <img src="imgbank.jpg" id="imgstyle">
         <div>
               <button id="signupBTN">SIGN UP</button>
               <button id="signinBTN">SIGN IN</button>
              </div>
              <form id="Signin" class="hide">
                  <h2>LOG IN</h2>
                  <input type="text" name="name" placeholder="USERNAME">
                  <input type="password" name="password"  placeholder="PASSWORD">
                    <button type="submit">LOGIN</button>

              </form>
              <form id="Signup" class="hide">
                  <h2>SIGN UP</h2>
                  <input type="text" name="name" placeholder="NAME">
                  <input type="text" name="email" placeholder="EMAIL">
                  <input type="number" name="amount" placeholder="Current amount">
                  <input type="date" name="dob" placeholder="DATE">
                  <input type="text" name="password" placeholder="Password">
                  <p>
                      <label><input type="radio" name="gender" value="male" id="">
                        <span>MALE</span>
                    </label>
                  </p>
                  <p>
                        <label><input type="radio" name="gender" value="female" id="">
                          <span>FEMALE</span>
                      </label>
                    </p>
                    <div>
                       <button type="submit">Submit</button>
                    </div>

              </form>
         <!-- <div>
             <button>SIGN UP</button>
             <button>SIGN IN</button>
             
         </div> -->


        </div>





    </div>
    <script src="Homebnkapp.js"></script>
</body>
</html>