<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminMaster.master" AutoEventWireup="true" CodeFile="AssignUsers.aspx.cs" Inherits="Admin_AssignUsers" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
 <div class="main">
      <div class="row">
        <div class="col-lg-12">
        <h1 class="page-header">Administrator Dashboard</h1>
        <%--<h2>Client Management -- Create Client</h2>--%>
        <div class="breadcrumbdiv">
        <div class="btn-group btn-breadcrumb">
            <a href="Home.aspx" class="btn btn-default"><i class="glyphicon glyphicon-home" style="padding-bottom: 4px;
    padding-top: 3px;"></i></a>
            <a href="AssignUsers.aspx" class="btn btn-default">Assign Users</a></div>
        </div>
          <div class="clear10"></div>
        </div>
        <div class="clear"></div>
        <%--<div class="col-lg-6">--%>
       <div class="col-lg-4">
  <div class="form-group">
    <label  class="control-label">Select Manager Role: </label>
        <asp:DropDownList class="form-control" ID="ddlManagerRole" runat="server" 
          AutoPostBack="True" 
          onselectedindexchanged="ddlManagerRole_SelectedIndexChanged">
        </asp:DropDownList>
  </div>
  <div class="form-group">
  <label  class="control-label">Select Manager: </label>
        <asp:DropDownList ID="ddlManager" class="form-control" runat="server">
        </asp:DropDownList>
  </div>
    <div class="form-group">
    <label  class="control-label">Select Employee Role: </label>
        <asp:DropDownList class="form-control" ID="ddlEmployeeRole" runat="server" 
            AutoPostBack="True" 
            onselectedindexchanged="ddlEmployeeRole_SelectedIndexChanged">
        </asp:DropDownList>
  </div>
  <div class="form-group">
  <label  class="control-label">Select Employee: </label>
        <asp:DropDownList ID="ddlEmployee" class="form-control" runat="server">
        </asp:DropDownList>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
        <asp:Button ID="btnSubmit" runat="server" class="btn btn-default" Text="Assign" 
            onclick="btnSubmit_Click" />
     <asp:Label ID="lblerr" runat="server" Text="" Font-Bold="True" ForeColor="Maroon"></asp:Label>
    </div>
  
  
  </div>
  </div>

  <div class="col-md-6">
  <div class="row">
  <h1 class="page-header">Assigned List</h1>
    <div class="">
   <div class="table-responsive">
          <asp:GridView ID="gvAssignedList" CssClass="table table-bordered table-striped table-hover" runat="server" AutoGenerateColumns="False" 
              CellPadding="4" EmptyDataText="No Clients Found" ForeColor="#333333" 
              GridLines="None" ShowHeaderWhenEmpty="True" Width="100%">
              <AlternatingRowStyle BackColor="White" />
              <Columns>
                  <asp:BoundField DataField="ID" HeaderText="ID" />
                  <asp:BoundField DataField="Manager_ID" HeaderText="Manager ID" />
                  <asp:BoundField DataField="User_Role" HeaderText="Role" />
                  <asp:BoundField DataField="Base_User_ID" HeaderText="Employee ID" />
              </Columns>
              <EditRowStyle BackColor="#2461BF" />
              <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
              <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
              <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
              <RowStyle BackColor="#EFF3FB" />
              <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
              <SortedAscendingCellStyle BackColor="#F5F7FB" />
              <SortedAscendingHeaderStyle BackColor="#6D95E1" />
              <SortedDescendingCellStyle BackColor="#E9EBEF" />
              <SortedDescendingHeaderStyle BackColor="#4870BE" />
          </asp:GridView>
          </div>
          </div>
        <%--<div class="clear">Note: To Edit the Record Click on the Name of the Record.</div>--%>
        </div>
        </div>



  <%--<div class="col-lg-4">
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Address_Line2</label>  
      <asp:TextBox ID="txtAddress_Line2" placeholder="Address Line2" class="form-control" runat="server" ></asp:TextBox>
    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">City</label>   
      <asp:TextBox ID="txtCity" placeholder="City" class="form-control" runat="server" ></asp:TextBox>
   
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">State</label>    
      <asp:TextBox ID="txtState" placeholder="State" class="form-control" runat="server" ></asp:TextBox>   
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">ZIP</label>  
      <asp:TextBox ID="txtZIP" placeholder="ZIP" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Country</label>   
      <asp:TextBox ID="txtCountry" placeholder="Country" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  
 
    
        </div>
        <div class="col-lg-4">
        <div class="form-group">
    <label for="inputPassword3" class="control-label">Industry</label>   
      <asp:TextBox ID="txtIndustry" placeholder="Industry" class="form-control" runat="server" ></asp:TextBox>    
  </div>
          <div class="form-group">
    <label for="inputPassword3" class="control-label">Role</label>  
        <asp:DropDownList  class="form-control" ID="ddlRole" runat="server">
            <asp:ListItem>Recruiter</asp:ListItem>
            <asp:ListItem>Acct_Manager</asp:ListItem>
            <asp:ListItem>Admin</asp:ListItem>
            <asp:ListItem>Entry_Specialist</asp:ListItem>
        </asp:DropDownList>
   
  </div>
          <div class="form-group">
    <label for="inputPassword3" class="control-label">Role_Level</label>   
        <asp:DropDownList ID="ddlRole_Level"  class="form-control" runat="server">
            <asp:ListItem>Lead</asp:ListItem>
            <asp:ListItem>Senior</asp:ListItem>
            <asp:ListItem>Mid</asp:ListItem>
            <asp:ListItem>Junior</asp:ListItem>
        </asp:DropDownList>
 
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">UserName*</label>   
      <asp:TextBox ID="txtUserName" placeholder="UserName" class="form-control" runat="server" ></asp:TextBox>    
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="control-label">Password*</label>   
      <asp:TextBox ID="txtPassword" placeholder="Password" class="form-control" runat="server" TextMode="Password"></asp:TextBox>   
  </div>

  </div>
  </div>--%>
  <div class="clear10"></div>
        
       
      </div>
    </div>
</asp:Content>

