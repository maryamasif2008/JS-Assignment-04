                                              //Chapter 04//

                                            /* Question 01*/
let var1 = 10;
var2 = "Hello";
var3 = true;

                                            /* Question 02*/
var legalNames = ["$my_1stVariable", "_name", "myVariable", "var_123", "$var"];
var illegalNames = ["123var", "var@name", "my-variable", "name#1", "1stVariable"];

                                           /* Question 03*/
const message = `
            Variable names can only contain letters, numbers, underscores, and dollar signs.<br>
            For example: $my_1stVariable<br><br>

            Variables must begin with a letter, underscore, or dollar sign.<br>
            For example: $name, _name, or name.<br><br>

            Variable names are case sensitive.<br><br>

            Variable names should not be JavaScript keywords.<br><br>

            Legal variable names:<br>${legalNames.join(", ")}<br><br>
            Illegal variable names:<br>${illegalNames.join(", ")}
`;

document.getElementById("variable-info").innerHTML = message;
  

