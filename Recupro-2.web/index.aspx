<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Recupro - Recruitment Process Made Easy</title>
<!-- Bootstrap -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
<link href="assets/css/common.css" rel="stylesheet"/>
<link href="assets/css/homestyle.css" rel="stylesheet"/>
<link href="assets/css/leftmenu.css" rel="stylesheet"/>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body>
<div class="wrapper">
  <div class="logindiv">
    <div class="leftdiv"><img src="assets/images/recruitment-picbg.jpg"/></div>
    <div class="rightdiv">
     <div class="loginlogo"><img src="assets/images/recupro-logo.png"/></div>
     <div class="login_dt">
     <form id="form1" runat="server">
              <div class="form-group">
              <%--  <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">--%>
                  <label for="exampleInputEmail1">User Name</label>
                  <asp:TextBox ID="txtUserName" runat="server" class="form-control" placeholder="User Name"></asp:TextBox>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <asp:TextBox ID="txtPassword" runat="server" class="form-control" 
                      placeholder="Password" TextMode="Password"></asp:TextBox>
              </div>              
             <%-- <div class="checkbox">
                <label>
                  <input type="checkbox"> Check me out
                </label>
              </div>--%>
              <%--<button type="submit" class="btn btn-default ">Submit</button>--%>
              <asp:Button ID="btnLogin" CssClass="btn btn-default " runat="server" 
                  Text="Login" onclick="btnLogin_Click" />
     <asp:Label ID="lblerr" runat="server" Text="" Font-Bold="True" ForeColor="Maroon"></asp:Label>
</form>
     </div>
    </div>
    
  </div>
</div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<!--<script src="assets/js/bootstrap.min.js"></script>-->
<script src="assets/js/leftmenu.js"></script>
</body>
</html>
