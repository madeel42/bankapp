let bankapp = {
    accounts: [],
    loginACCount: null,
    filterNature(evt) {
        console.log(evt.target.value);
        let filterednature = bankapp.loginACCount.transctions.filter((transction) => {
            if (transction.nature == evt.target.value || evt.target.value == "all") {
                return true;
            }
        });
        bankapp.updateUI(filterednature);
        // bankapp.updateUI(bankapp.loginACCount.transctions);
    },
    createaccount(evt) {
        evt.preventDefault();
        let newaccount = {
            transctions: [],
            name: SIGNUPform.name.value,
            password: SIGNUPform.password.value,
            email: SIGNUPform.email.value,
            date: SIGNUPform.dob.value,
            Amount: SIGNUPform.Amount.value
        }

        bankapp.accounts.push(newaccount);
        bankapp.savetoDB();
        alert("congrates!your accounte is sucesssfully created");

    },
    savetoDB() {
        localStorage.setItem("data", JSON.stringify(bankapp.accounts));
    },
    loadfromDB() {
        let getdata = localStorage.getItem("data");
        if (getdata) {
            bankapp.accounts = JSON.parse(getdata);
        }
    },
    loginaccount(evt) {
        evt.preventDefault();
        let name = LOGINform.name.value;
        let password = LOGINform.password.value;
        let accountFound = bankapp.accounts.find(function (account) {
            if (account.name == name && account.password == password) {
                return true;
            }

        });
               //for money trafer
               let option;
               let otheraccounts = bankapp.accounts.find((accounts) => {
                   if (accounts.name != name) {
                       option = document.createElement("a");
                       option.setAttribute("class", "dropdown-item");
                       option.innerText = accounts.name;
                       drop.appendChild(option);
       
       
                   }
               });
       
       
               drop.onclick = (event) => {
                   console.log(event.target.innerText);
       
                   let findAccount = bankapp.accounts.find((accounts) => {
                       recieverName = event.target.innerText;
                       rN.innerText = recieverName;
                       if (accounts.name == recieverName) {
                           // console.log( ammountToTransfer);
                           if (WITHDRAWamount.value <= bankapp.loginACCount.Amount) {
                               transferAmmount.onclick = function () {
                                   accounts.Amount = +(WITHDRAWamount.value) + +(accounts.Amount);
       
       
                                   ACCOUNTbalance.innerText = ACCOUNTbalance.innerText - WITHDRAWamount.value;
                                   bankapp.loginACCount.Amount = bankapp.loginACCount.Amount - WITHDRAWamount.value;
                                   bankapp.savetoDB();
                                   alert("Transder SucessFull")
                               }
                           }
                           else {
                               alert("Your balance is Insuficient");
                           }
       
       
                       }
       
                   });
       
       
               }
        if (accountFound) {
            console.log("account found");
            dashboad.classList.remove("hide");
            mainscreen.classList.add("hide");
            ACCOUNTname.innerText = accountFound.name;
            ACCOUNTbalance.innerText = accountFound.Amount;
            bankapp.loginACCount = accountFound;
            bankapp.updateUI(bankapp.loginACCount.transctions);

        } else {
            console.log("account not found");
        }
     
    },
    
    withdrawAmount() {

        bankapp.loginACCount.Amount -= WITHDRAWamount.value;
        ACCOUNTbalance.innerText = bankapp.loginACCount.Amount;
        let showdata = {
            type: "cash",
            nature: "withdraw",
            amount: WITHDRAWamount.value,
            date: new Date().toLocaleDateString(),
        };
        if (bankapp.loginACCount.transctions == undefined) {
            bankapp.loginACCount.transctions = [];
        };
        bankapp.loginACCount.transctions.push(showdata);
        bankapp.savetoDB();
        bankapp.updateUI(bankapp.loginACCount.transctions);

    },
    depositAmount() {
        bankapp.loginACCount.Amount = +bankapp.loginACCount.Amount + +WITHDRAWamount.value;
        ACCOUNTbalance.innerText = bankapp.loginACCount.Amount;
        let showdata = {
            type: "cash",
            nature: "deposite",
            amount: WITHDRAWamount.value,
            date: new Date().toLocaleDateString(),
        };
        if (bankapp.loginACCount.transctions == undefined) {
            bankapp.loginACCount.transctions = [];
        };
        bankapp.loginACCount.transctions.push(showdata);
        bankapp.savetoDB();
        bankapp.updateUI(bankapp.loginACCount.transctions);

    },
    deletetransaction(del) {
        bankapp.loginACCount.transctions.splice(del, 1);
        bankapp.updateUI(bankapp.loginACCount.transctions);
        bankapp.savetoDB();

    },
    dataupdate(index) {
        bankapp.loginACCount.transctions[index].amount = event.target.innerText;
        console.log("update amount");
        bankapp.savetoDB();
    },
    updateUI(transctions) {
        transctiontable.innerHTML = "";
        transctions.forEach(function (transction, index) {
            transctiontable.innerHTML += '<tr class="' + transction.nature + '"><td>' + transction.date + '</td>\
            <td>'+ transction.nature + '</td><td>' + transction.type + '</td>\
            <td contenteditable onblur="bankapp.dataupdate('+ index + ')">' + transction.amount + '</td>\
            <td><button onclick="bankapp.deletetransaction(' + index + ')">Delete</button></td></tr>'

        })

    },

    initilized() {
        bankapp.loadfromDB();
        transactionfilter.onchange = bankapp.filterNature;
        SIGNUPform.onsubmit = bankapp.createaccount;
        LOGINform.onsubmit = bankapp.loginaccount;
        withdrawBTN.onclick = bankapp.withdrawAmount;
        depositBTN.onclick = bankapp.depositAmount,
            LOGINBTN.onclick = function () {
                LOGINform.classList.remove("hide");
                SIGNUPform.classList.add("hide");

            }
        SIGNUPBTN.onclick = function () {
            SIGNUPform.classList.remove("hide");
            LOGINform.classList.add("hide");
        }
    }
}
bankapp.initilized();